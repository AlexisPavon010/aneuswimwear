import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';

import { checkUserEmailPassword, oAuthToDbUser } from '../../../database/dbUsers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
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

    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),

    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  // Custom Pages
  pages: {
    signIn: '/auth/signin',
    newUser: '/auth/signin'
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