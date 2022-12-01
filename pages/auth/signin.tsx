import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Divider, Flex, FormControl, FormErrorMessage, Image, Input, Link as ChakraLink, Stack, Text, useToast } from '@chakra-ui/react'
import { FaFacebookF, FaArrowLeft } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { getProviders, getSession, signIn as LoginWhitProviders, } from 'next-auth/react'
import { GetServerSideProps } from 'next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import NextLink from 'next/link';
import Head from 'next/head';

import { recoveryPassword, registerUser } from '../../client';

const Signin = ({ providers, error }: any) => {
  const [isRegister, setIsRegister] = useState(false)
  const [isForgot, setIsForgot] = useState(false)

  return (
    <Box height='100vh'>
      <Head>
        <title>Aneuswimwear | {isRegister ? 'Register' : 'Signin'}</title>
      </Head>
      <Flex height='100%'>
        <Flex display={{ base: 'none', lg: 'block' }} bgImage={'/assets/login.jpg'} position='relative' flex='1'>
          <Box
            position='absolute'
            left='16px'
            top='16px'
            fontSize='32px'
            zIndex='10'
            color='#fff'
          >
            <NextLink href='/'>
              <FaArrowLeft size='24px' />
            </NextLink>
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
            <Flex m={{ base: '40px 0 32px 0', lg: '0 0 32px 0' }} mb={8} justifyContent='center'>
              <Image w='150px' src='/assets/logo_negro.png' alt='logo' />
            </Flex>
            <Text
              mb='36px'
              as='h1'
              textAlign='center'
              fontWeight={900}
              fontSize='27px'
            >
              Join The Aneu Club
            </Text>
            {isForgot ? (
              <ForgotComponent setIsForgot={setIsForgot} />
            ) : (
              <>
                <Box>
                  <Stack direction='column' spacing={4}>
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
                  <Flex mb={4} justifyContent='center'>
                    {
                      isRegister ? (
                        <Text
                          mr={2}
                        >
                          You already have an account?
                        </Text>
                      ) : (
                        <Text
                          mr={2}
                        >
                          You do not have an account?
                        </Text>
                      )}
                    <Text
                      cursor='pointer'
                      fontWeight={900}
                      onClick={() => setIsRegister((state: boolean) => !state)}
                    >
                      {isRegister ? 'Login' : 'Sign up'}
                    </Text>
                  </Flex>
                  <ChakraLink onClick={() => setIsForgot(true)}>
                    Forgot password?
                  </ChakraLink>
                </Box>
              </>
            )}
          </Box>
        </Flex >
      </Flex >
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

const ForgotComponent = ({ setIsForgot }: { setIsForgot: any }) => {
  const [errorMessages, setErrorMessage] = useState('')
  const [hasError, setHasError] = useState(false)
  const [hasSuccess, setHasSuccess] = useState(false)
  const [isLoading, setLoading] = useState(false)


  const schema = yup.object({
    email: yup.string().email().required(),
  })

  const { register, handleSubmit, watch, formState: { errors } }: any = useForm({
    resolver: yupResolver(schema)
  });

  const handleRecoveryPassword = async ({ email }: { email: string }) => {
    setLoading(true)
    try {
      const { data } = await recoveryPassword(email)
      setHasSuccess(true)
    } catch (error: any) {
      console.log(error)
      setErrorMessage(error.response.data.message)
      setHasError(true)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      {hasSuccess ? (
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Recovery confirmation!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            In your email you will receive a link to reset your password
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <FormControl isInvalid={hasError}>
            <FormErrorMessage justifyContent='center'>{errorMessages}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            <Input {...register("email")} mb='16px' type='email' placeholder='Email' focusBorderColor='none' />
          </FormControl>
          <Flex justifyContent='space-between'>
            <Button
              onClick={() => setIsForgot(false)}
              margin='16px 0'
              color='#333'
              borderColor='#333'
              variant='outline'
              _hover={{
                color: 'white',
                background: '#333'
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit(handleRecoveryPassword)}
              margin='16px 0'
              background='#d9534f'
              color='white'
              _hover={{}}
              isLoading={isLoading}
            >
              Reset password
            </Button>
          </Flex>
        </>
      )}
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

