import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import NextImage from "next/image";
import Head from "next/head";

const ReturnsExchangesPage = () => {
  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Returns & Exchanges</title>
      </Head>
      <Box position='relative' mb={8}>
        <Box
          position='absolute'
          height='100%'
          width='100%'
          left='0'
          top='0'
        >
          <NextImage
            style={{
              objectFit: 'cover',
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: '0',
              top: '0',
            }}
            width={6000}
            height={6000}
            src={'https://cdn.shopify.com/s/files/1/2247/4301/files/LOOK_12_038_1600x.jpg?v=1652224126'}
            alt='banner'
          />
        </Box>
        <Flex
          justify='center'
          align='center'
          minH='50vh'
        >
          <Box
            p='30px'
            textAlign='center'
            zIndex={1}
          >
            <Text
              mb={4}
              color='white'
              fontSize='40px'
              fontWeight={600}
            >
              CUSTOMER CARE
            </Text>
          </Box>
        </Flex>
      </Box>
      <Container maxW='1000'>
        <Text
          fontSize={{ base: '30px', md: '36px', lg: '40px' }}
          fontWeight={600}
          align='center'
          mb='25px'
        >
          RETURNS & EXCHANGES
        </Text>
        <Accordion
          allowMultiple
          mb='60px'
        >

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                What is our Returns Policy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                Se deberá notificar el problema hasta 48 horas posterior a la entrega. En caso de que Aneu sea responsable de la incidencia, se procede a una devolución o cambio. Se reembolsaría el valor completo del producto y sus gastos de envíos; o se enviaría el nuevo producto sin costo adicional. Esto solo aplica en daño de fabrica.
              </Text>
              <Text
                mb='10px'
              >
                Si el cliente ha pedido una talla incorrecta:
                <br />
                En este caso, el cliente será responsable de los gastos de envío y devolución para un nuevo cambio. No se aceptan devoluciones injustificadas.
              </Text>
              <Text
                mb='10px'
              >
                Por razones sanitarias, pruébate el traje de baño sobre la ropa interior, no aceptamos cambios que estén usados o sucios/manchados.
              </Text>
              <Text
                mb='10px'
              >
                Por favor contáctanos mediante correo, WhatsApp o mail.
              </Text>
              <Text
                mb='10px'
              >
                <strong>Correo: </strong>aneuswimwear@gmail.com
                <br />
                <strong>WhatsApp: </strong>+593 98 292 2066
                <br />
                <strong>Instagram: </strong>@aneuswimwear
              </Text>
              <Text
                mb='10px'
              >
                If the customer has ordered an incorrect size:
                In this case, the customer will be responsible for the shipping and return costs for a new exchange. Unjustified returns are not accepted.
              </Text>
              <Text
                mb='10px'
              >
                For sanitary reasons please try on swimwear over your underwear, we do not accept exchanges that are worn or are soiled/stained.
              </Text>
              <Text
                mb='10px'
              >
                <strong>Mail: </strong>aneuswimwear@gmail.com
                <br />
                <strong>WhatsApp: </strong>+593 98 292 2066
                <br />
                <strong>Instagram: </strong>@aneuswimwear
              </Text>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </Container>
    </Box>
  )
}

export default ReturnsExchangesPage;