import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

import { checkUserEmailPassword, oAuthToDbUser } from '../../../database/dbUsers';

console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
console.log(process.env.GOOGLE_CLIENT_SECRET)


export default NextAuth({
  // Configure one or more authentication providers
  providers: [

    // ...add more providers here

    Credentials({
      name: 'Custom Login',
      credentials: {
        email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com' },
        password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña' },
      },
      async authorize(credentials) {
        console.log({ credentials })
        // return { name: 'Juan', correo: 'juan@google.com', role: 'admin' };

        return await checkUserEmailPassword(credentials!.email, credentials!.password);
      }
    }),

    GoogleProvider({
      clientId: '460736580067-5qauqtbs3o30gtgll58i21fmhjk0jjhe.apps.googleusercontent.com',
      clientSecret: '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',
    }),


  ],

  // Custom Pages
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register'
  },

  secret: process.env.AUTH_JWT_SECRET,

  session: {
    maxAge: 2592000, /// 30d
    strategy: 'jwt',
    updateAge: 86400, // cada día
  },

  // Callbacks
  callbacks: {

    async jwt({ token, account, user }) {
      // console.log({ token, account, user });

      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {

          case 'oauth':
            token.user = await oAuthToDbUser(user?.email || '', user?.name || '');
            break;

          case 'credentials':
            token.user = user;
            break;
        }

      }

      return token;
    },


    async session({ session, token, user }: any) {
      // console.log({ session, token, user });

      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    }


  }

});