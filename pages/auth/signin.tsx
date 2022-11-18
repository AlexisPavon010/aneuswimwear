import { Box, Button, Divider, Flex, FormControl, FormErrorMessage, Image, Input, Stack, Text } from '@chakra-ui/react'
import { FaFacebookF, FaArrowLeft } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { getProviders, getSession, signIn as LoginWhitProviders, } from 'next-auth/react'
import { GetServerSideProps } from 'next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Link from 'next/link';
import Head from 'next/head';

import { registerUser } from '../../client';

const Signin = ({ providers, error }: any) => {
  const [isRegister, setIsRegister] = useState(false)

  console.log(providers)

  return (
    <Box height='100vh'>
      <Head>
        <title>Aneuswimwear | {isRegister ? 'Register' : 'Signin'}</title>
      </Head>
      <Flex height='100%' >
        <Flex display={{ base: 'none', lg: 'block' }} bgImage={'/assets/login.jpg'} position='relative' flex='1'>
          <Box
            position='absolute'
            left='16px'
            top='16px'
            fontSize='32px'
            zIndex='10'
            color='#fff'
          >
            <Link href='/'>
              <FaArrowLeft size='24px' />
            </Link>
          </Box>
          <Flex
            backgroundColor='rgba(0,0,0,.6)'
            justifyContent='center'
            flexDirection='column'
            position='absolute'
            padding='48px'
            width='100%'
            height='100%'
            left='0'
            top='0'
          >
            <Flex
              alignItems='end'
              fontFamily='Niconne, cursive'
              fontSize='36px'
              mb='24px'
            >
              <Image alt='logo' w='100px' src='/assets/logo.png' />
              <Text
                color='white'
              >
                Aneuswimwear
              </Text>
            </Flex>
            <Text color='white' fontSize='46px' fontWeight={900} lineHeight='51px'>
              Connect with your favorite bikinis, models and brands
            </Text>
          </Flex>
        </Flex>
        <Flex padding='32px' flex='1' alignItems='center' justifyContent='center'>
          <Box width='100%' maxW='450px'>
            <Text mb='36px' fontWeight={900} fontSize='27px' as='h1'>
              Join Aneus Now
            </Text>
            <Box>
              <Stack direction='column' spacing={2}>
                {providers ? Object.values(providers).map((provider: any) => {
                  if (provider.id === 'credentials') return null
                  console.log(providers)
                  let icon;
                  let color;
                  let variant;
                  switch (provider.id) {
                    case 'facebook':
                      icon = <FaFacebookF />
                      color = 'facebook'
                      break;
                    case 'google':
                      icon = <FcGoogle />
                      break;

                    default:
                      break;
                  }
                  return (
                    <div key={provider.name}>
                      <Button
                        onClick={() => LoginWhitProviders(provider.id)}
                        leftIcon={icon}
                        colorScheme={color}
                        width='100%'
                      >
                        Sign in with {provider.name}
                      </Button>
                    </div>
                  )
                }) : null}
              </Stack>
              <Flex alignItems='center' margin='16px 0'>
                <Divider />
                <Text fontSize='14px' color='gray' w='100%' align='center'>
                  or via email
                </Text>
                <Divider />
              </Flex>
              {isRegister ? (
                <RegisterComponent />
              ) : (
                <LoginComponent />
              )}
            </Box>
            <Box padding='16px' textAlign='center'>
              <Flex justifyContent='center'>
                <Text
                  mr={2}
                >
                  Have an account?
                </Text>
                <Text
                  fontWeight={900}
                  onClick={() => setIsRegister((state: boolean) => !state)}
                >
                  {isRegister ? 'Login' : 'Sign in'}
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box >
  )
}

const LoginComponent = () => {

  const schema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(6).required('Password is required')
  })

  const { register, handleSubmit, watch, formState: { errors } }: any = useForm({
    resolver: yupResolver(schema)
  });

  const handleLoginWhitEmailAndPassword = async ({ email, password }: any) => {
    console.log('first')
    await LoginWhitProviders('credentials', { email, password })
  }

  return (
    <>
      <FormControl isInvalid={false}>
        <FormErrorMessage justifyContent='center'>Invalid Credentials </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        <Input {...register("email", { required: "Email is required" })} mb='16px' type='email' placeholder='Email' focusBorderColor='none' />
      </FormControl>
      <FormControl isInvalid={errors.password}>
        <FormErrorMessage>{errors?.password?.message}.</FormErrorMessage>
        <Input {...register("password", { required: "Password is required" })} mb='16px' type='password' placeholder='Password' focusBorderColor='none' />
      </FormControl>
      <Button onClick={handleSubmit(handleLoginWhitEmailAndPassword)} margin='16px 0' background='#000' color='white' width='100%'>Join</Button>
    </>
  )
}

const RegisterComponent = () => {
  const [showError, setShowError] = useState(false)
  const [errorMessages, setErrorMessage] = useState('')

  const schema = yup.object({
    name: yup.string().min(3).required('Name is required'),
    email: yup.string().email().required(),
    password: yup.string().min(6).required('Password is required')
  })

  const { register, handleSubmit, watch, formState: { errors } }: any = useForm({
    resolver: yupResolver(schema)
  });

  const handleRegisterWhitEmailAndPassword = async ({ email, password, name }: { email: string, password: string, name: string }) => {

    console.log({ email, password, name })
    try {
      const { data } = await registerUser(email, password, name)
      await LoginWhitProviders('credentials', { email, password })
    } catch (error: any) {
      console.log(error)
      setShowError(true)
      setErrorMessage(error.response.data.message)
      setTimeout(() => {
        setShowError(false)
      }, 3000);
    }
  }

  return (
    <>
      <FormControl isInvalid={showError}>
        <FormErrorMessage justifyContent='center'>{errorMessages}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name}>
        <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
        <Input {...register("name")} mb='16px' type='text' name='name' placeholder='Username' focusBorderColor='none' />
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        <Input {...register("email")} mb='16px' type='email' name='email' placeholder='Email' focusBorderColor='none' />
      </FormControl>
      <FormControl isInvalid={errors.password}>
        <FormErrorMessage>{errors?.password?.message}.</FormErrorMessage>
        <Input {...register("password")} mb='16px' type='password' name='password' placeholder='Password' focusBorderColor='none' />
      </FormControl>
      <Button onClick={handleSubmit(handleRegisterWhitEmailAndPassword)} margin='16px 0' background='#000' color='white' width='100%'>Register</Button>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const session = await getSession({ req })
  const providers = await getProviders()

  const { p = '/', error = null } = query;

  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false
      }
    }
  }

  return {
    props: {
      providers,
      error
    }
  }

}

export default Signin;

