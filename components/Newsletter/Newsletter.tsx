import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Flex, Text, Input, InputGroup, InputRightElement, Spinner, FormControl, FormErrorMessage, Alert, AlertIcon } from "@chakra-ui/react"
import NextImage from "next/image"
import { useState } from "react"
import { FiSend } from "react-icons/fi"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import { sendNewsletterEmail } from "../../client"

export interface Props {
  image: Image;
  secondtitle: string;
  subtitle: string;
  title: string;
  description: string;
}

export interface Image {
  url: string;
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

  const { description, title, image, secondtitle, subtitle } = newsletter;


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
        <ModalCloseButton _focusVisible={{}} zIndex={3} />
        <ModalBody p={0} position='relative' >
          <NextImage
            src={image.url}
            alt="Newsletter image"
            height={1000}
            width={1000}
          />
          <Flex
            color={'white'}
            position='absolute'
            top={0}
            left={0}
            bottom={0}
            right={0}
            justifyContent='end'
            direction='column'
            p='8px 16px 24px 16px'
          >
            <Text
              fontSize='28px'
              fontWeight={600}
              textAlign='center'
            >
              {title}
            </Text>
            <Text
              fontSize='60px'
              fontWeight={600}
              textAlign='center'
            >
              {secondtitle}
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
                  <Input
                    color='black'
                    placeholder='Enter email'
                    focusBorderColor='none'
                    borderRadius='none'
                    {...register('email', { required: true })}
                    backgroundColor='white'
                  />
                  <InputRightElement>
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      <FiSend cursor='pointer' size='20px' color="gray" onClick={handleSubmit(sendEmail)} />
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
