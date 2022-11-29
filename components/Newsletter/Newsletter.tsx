import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Flex, Text, Input, InputGroup, InputRightElement, Spinner, FormControl, FormErrorMessage, Alert, AlertIcon } from "@chakra-ui/react"
import NextImage from "next/image"
import { useState } from "react"
import { FiSend } from "react-icons/fi"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import { sendNewsletterEmail } from "../../client"

interface Props {
  description: string;
  firstTitle: string;
  images: string;
  secondTitle: string;
  subtitle: string;
  _id: string;
}

const schema = yup.object({
  email: yup.string().required('comment is required'),
})

export const Newsletter = ({ newsletter }: { newsletter: Props }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [show, setShow] = useState(true);

  const handleCloseModal = () => {
    setShow(false)
  }

  const { description, firstTitle, images, secondTitle, subtitle } = newsletter;


  const sendEmail = async ({ email }: { email?: string }) => {
    setIsLoading(true)
    try {
      const { data } = await sendNewsletterEmail(email!)
      setIsSuccess(true)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
      setValue('email', '')
      setTimeout(() => {
        setShow(false)
      }, 2500);
    }
  }

  return (
    <Modal
      size='xl'
      isOpen={show}
      onClose={handleCloseModal}
    >
      <ModalOverlay />
      <ModalContent borderRadius={0}>
        <ModalCloseButton _focusVisible={{}} />
        <ModalBody p={0} >
          <NextImage
            src={images[0]}
            alt="Newsletter image"
            height={1000}
            width={1000}
          />
          <Flex
            direction='column'
            p='8px 16px 24px 16px'
          >
            <Text
              fontSize='28px'
              fontWeight={600}
              textAlign='center'
            >
              {firstTitle}
            </Text>
            <Text
              fontSize='60px'
              fontWeight={600}
              textAlign='center'
            >
              {secondTitle}
            </Text>
            <Text
              fontSize='24px'
              fontWeight={600}
              textAlign='center'
            >
              {subtitle}
            </Text>
            <Text
              textAlign='center'
              mb={4}
            >
              {description}
            </Text>
            {isSuccess ? (
              <Alert status='success'>
                <AlertIcon />
                Mail sent successfully
              </Alert>
            ) : (
              <FormControl isInvalid={!!errors.email}>
                <InputGroup>
                  <Input placeholder='Enter email' focusBorderColor='none' borderRadius='none' {...register('email', { required: true })} />
                  <InputRightElement>
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      <FiSend cursor='pointer' size='20px' onClick={handleSubmit(sendEmail)} />
                    )}
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>please enter an email</FormErrorMessage>
              </FormControl>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal >
  )
}
