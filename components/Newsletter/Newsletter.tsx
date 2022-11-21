import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Flex, Text, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import NextImage from "next/image"
import { useState } from "react"
import { FiSend } from "react-icons/fi"

interface Props {
  description: string;
  firstTitle: string;
  images: string;
  secondTitle: string;
  subtitle: string;
  _id: string;
}

export const Newsletter = ({ newsletter }: { newsletter: Props }) => {
  const [show, setShow] = useState(true)

  const handleCloseModal = () => {
    setShow(false)
  }

  const { description, firstTitle, images, secondTitle, subtitle } = newsletter;

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
            >
              {description}
            </Text>
            <InputGroup mt={4}>
              <Input placeholder='Enter email' focusBorderColor='none' borderRadius='none' />
              <InputRightElement>
                <FiSend size='20px' />
              </InputRightElement>
            </InputGroup>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal >
  )
}
