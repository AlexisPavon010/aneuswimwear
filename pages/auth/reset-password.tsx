import { Flex, Box, Image, Text, FormControl, FormErrorMessage, Input, Button, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import NextLink from 'next/link'
import Head from "next/head";
import * as yup from 'yup'

import { resetPassword } from "../../client";

const ResetPasswordPage = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()
  const router = useRouter()

  const schema = yup.object({
    password: yup.string().min(6).required('Password is required'),
    password2: yup.string()
    .oneOf([yup.ref('password')], 'Password must be the same!')
    .required('Password is required')
  })

  const { register, handleSubmit, watch, formState: { errors } }: any = useForm({
    resolver: yupResolver(schema)
  });

  const { query }: any = useRouter()

  const handleResetPassword = async ({ password }: { password: string }) => {
    setLoading(true)
    try {
      const { data } = await resetPassword(password, query.token!)
      toast({
        title: 'Success.',
        description: "Password reset successfully.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      router.replace('/auth/signin')
    } catch (error) {
      console.log(error)
      toast({
        title: 'Opss!.',
        description: "An error has occurred.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box height='90vh'>
      <Head>
        <title>Aneuswimwear | Reset Password</title>
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
              <Image w='150px' src='/assets/logo_negro.png' />
            </Flex>
            <Text
              mb='36px'
              as='h1'
              textAlign='center'
              fontWeight={900}
              fontSize='27px'
            >
              Set a new password
            </Text>
            <FormControl isInvalid={errors.password}>
              <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              <Input {...register("password")} mb='16px' type='password' name='password' placeholder='New Password' focusBorderColor='none' />
            </FormControl>
            <FormControl isInvalid={errors.password2}>
              <FormErrorMessage>{errors?.password2?.message}.</FormErrorMessage>
              <Input {...register("password2")} mb='16px' type='password' name='password2' placeholder='Confirm  new password' focusBorderColor='none' />
            </FormControl>
            <Button
              onClick={handleSubmit(handleResetPassword)}
              isLoading={isLoading}
              margin='16px 0'
              background='#000'
              color='white'
              width='100%'
            >
              Reset
            </Button>
          </Box>
        </Flex >
      </Flex >
    </Box >
  )
}

export default ResetPasswordPage;