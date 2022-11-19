import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Flex, Text, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import NextImage from "next/image"
import { useState } from "react"
import { FiSend } from "react-icons/fi"

export const Newsletter = () => {
  const [show, setShow] = useState(true)

  const handleCloseModal = () => {
    setShow(false)
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
            src="https://d3k81ch9hvuctc.cloudfront.net/company/M2zGdW/images/58fee55b-a768-4222-ac72-2f3e647740e6.jpeg"
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
              ENJOY
            </Text>
            <Text
              fontSize='60px'
              fontWeight={600}
              textAlign='center'
            >
              10% OFF
            </Text>
            <Text
              fontSize='24px'
              fontWeight={600}
              textAlign='center'
            >
              OFF YOUR FIRST ORDER
            </Text>
            <Text
              textAlign='center'
            >
              {`special sales, new arrivals & 10% off your first orden
              (Bassically FYI's on all the important stuff)`}
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
