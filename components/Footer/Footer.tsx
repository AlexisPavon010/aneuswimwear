import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import { FiSend } from 'react-icons/fi'

export const Footer = () => {
  return (
    <Box
      backgroundColor='#0d0d0d'
      float='left'
      width='100%'
    >
      <Box
        padding='90px 0 50px'
        overflow='hidden'
        color='#888888'
      >

        <Container maxW='720px' display={{ base: 'block', lg: 'none' }}>
          <Accordion allowMultiple>
            <AccordionItem border={0}>
              <h2>
                <AccordionButton>
                  <Text
                    flex='1'
                    color='white'
                    textAlign='left'
                    fontWeight={600}
                  >
                    SHOP
                  </Text>
                  <AccordionIcon color='white' fontSize='24px' />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  Address: Blossom - Lingerie Store
                  United States
                </Text>
                <Text>
                  Phone: 000-000-0000
                </Text>
                <Text>
                  Email: sales@yourcompany.com
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={0}>
              <h2>
                <AccordionButton>
                  <Text
                    flex='1'
                    color='white'
                    textAlign='left'
                    fontWeight={600}
                  >
                    CUSTOMER CARE
                  </Text>
                  <AccordionIcon color='white' fontSize='24px' />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  Offers
                </Text>
                <Text>
                  News
                </Text>
                <Text>
                  Best sellers
                </Text>
                <Text>
                  Contact us
                </Text>
                <Text>
                  Site Map
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={0}>
              <h2>
                <AccordionButton>
                  <Text
                    flex='1'
                    color='white'
                    textAlign='left'
                    fontWeight={600}
                  >
                    DISCOVER
                  </Text>
                  <AccordionIcon color='white' fontSize='24px' />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box p='8px 16px'>
            <h2>
              <Text
                mb={4}
                flex='1'
                color='white'
                textAlign='left'
                fontWeight={600}
              >
                JOIN THE ANEUSWIMWEAR
              </Text>
            </h2>
            <Box pb={2}>
              <InputGroup>
                <Input placeholder='Enter email' focusBorderColor='none' borderRadius='none' />
                <InputRightElement>
                  <FiSend size='20px' />
                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>

        </Container>
        <Grid
          gridTemplateColumns='repeat(4, 1fr)'
          display={{ base: 'none', lg: 'grid' }}
          maxW='1280px'
          margin='0 auto'
        >
          <Box
            p='0 15px'
            lineHeight='30px'
          >
            <Text
              fontWeight={700}
              color='white'
              mb='25px'
              as='h3'
            >
              SHOP
            </Text>
            <Text>
              Address:Blossom - Lingerie Store
              United States
            </Text>
            <Text>
              Phone:000-000-0000
            </Text>
            <Text>
              Email:sales@yourcompany.com
            </Text>

          </Box>
          <Box
            p='0 15px'
            lineHeight='30px'
          >
            <Text
              mb='25px'
              fontWeight={700}
              color='white'
            >
              CUSTOMER CARE
            </Text>
            <Text>
              Offers
            </Text>
            <Text>
              News
            </Text>
            <Text>
              Best sellers
            </Text>
            <Text>
              Contact us
            </Text>
            <Text>
              Site Map
            </Text>
          </Box>
          <Box p='0 15px' lineHeight='30px'>
            <Text
              mb='25px'
              fontWeight={700}
              color='white'
            >
              DISCOVER
            </Text>
            <Box>
              <Text>
                Delivery
              </Text>
              <Text>
                Legal Notice
              </Text>
              <Text>
                Terms and conditions of use
              </Text>
              <Text>
                About us
              </Text>
              <Text>
                Secure payment
              </Text>
              <Box>

              </Box>
            </Box>
          </Box>
          <Box p='0 15px' lineHeight='30px'>
            <Text
              mb='25px'
              color='white'
              fontWeight={700}
            >
              JOIN THE ANEUSWIMWEAR
            </Text>
            <Box>
              <InputGroup>
                <Input placeholder='Enter email' focusBorderColor='none' borderRadius='none' />
                <InputRightElement>
                  <FiSend size='20px' />
                </InputRightElement>
              </InputGroup>
              <Box>

              </Box>
            </Box>
          </Box>

        </Grid >

        <Box p='8px 16px'>
          <Flex pt='25px' justifyContent='center'>
            <Image mr='10px' src="/assets/visa.png" alt="Visa" />
            <Image mr='10px' src="/assets/paypal.png" alt="Paypal" />
            <Image mr='10px' src="/assets/maestro.png" alt="Maestro" />
            <Image mr='10px' src="/assets/amex.png" alt="Amex" />
            <Image mr='10px' src="/assets/master_card.png" alt="Master Card" />
          </Flex>
        </Box>

      </Box>

      <Box>
        <Container
          maxW='960px'
          borderTop='1px solid #3a3a3a'
          padding='30px 0px'
        >
          <Text
            color='white'
            fontSize='13px'
            textAlign='center'
          >
            © 2023 - Software Ecommerce desarrollado por Aneuswimwear ™
          </Text>
        </Container>
      </Box>
    </Box >
  )
}
