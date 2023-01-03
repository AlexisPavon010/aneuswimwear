import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Flex, Text } from "@chakra-ui/react";
import NextImage from 'next/image';
import Head from "next/head";

const ShippingAndDeliveryPage = () => {
  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Shipping & Delivery</title>
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
            src='/assets/IMG_4368.JPG'
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
              fontSize={{ base: '30px', md: '36px', lg: '40px' }}
              fontWeight={600}
            >
              CUSTOMER CARE
            </Text>
          </Box>
        </Flex>
      </Box>
      <Container maxW='1000'>
        <Text
          fontSize={{ base: '26px', md: '36px', lg: '40px' }}
          fontWeight={600}
          align='center'
          mb='25px'
        >
          SHIPPING & DELIVERY
        </Text>
        <Accordion
          allowMultiple
          mb='60px'
        >
          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                What shipping methods do you offer?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                fontWeight={600}
                mb='10px'
              >
                Ecuador
              </Text>
              <Text
                mb='10px'
              >
                Servientrega (2-3 días laborables)
                <br />
                Servientrega (Bikinis personalizados: 6-7 días laborables)
              </Text>
              <Text
                fontWeight={600}
                mb='10px'
              >
                International Shipping
              </Text>
              <Text
                mb='10px'
              >
                DHL (4-6 business days)
                <br />
                DHL (Custom bikini 10-14 business days)
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                How long will it take for my order to arrive?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                fontWeight={600}
                mb='10px'
              >
                ECUADOR
              </Text>
              <Text
                mb='10px'
              >
                Los bikinis en stock llegan en 2-3 días laborables mediante servientrega.
                Los bikinis personalizados entre 6-7 días laborables.
                Toma en cuenta que tu bikini es personalizado si:
                Cambiaste el color/print original
                Mezclaste top y bottoms
                Pediste menos o más cobertura en el bottom
              </Text>
              <Text
                fontWeight={600}
                mb='10px'
              >
                INTERNATIONAL
              </Text>
              <Text
                mb='10px'
              >
                After dispatch, your order will arrive within 4-5 business days. Please note weekend days are not business days. Please allow 1-2 business day for processing. Please note that transit times are measured at the point of dispatch.
                <br />
                <strong>Important: </strong>Holidays or orders made Friday, Saturday or Sunday are not count as a Business Day
                <br />
                <strong>Please note: </strong>During peak periods (Sales, Public Holidays, or the day after a Public Holiday), please allow up to 5 business days for orders to be sent out.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                When will my order ship?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                Generally orders are dispatched the following business day after order is confirmed, however please allow up to 2 business days for dispatch.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                How can I track my order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                After your parcel has dispatched, you will receive a shipping confirmation email which includes tracking details. Simply click on the link provided to track your order.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Duties and taxes:
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                Aneu Swimwear is not responsible for any customs charges or local taxes due to international shipment. Please familiarise yourself with your countries regulations as payment of these duties may be necessary to release your order.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Can I change my order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                Si necesitas cambiar tu orden, contáctanos mediante Instagram, WhatsApp o correo lo más pronto posible.
              </Text>
              <Text
                mb='10px'
              >
                If you need to change your order, please contact us immediately. We process orders quickly, and once our warehouse has processed your order we will be unable to make changes. Once orders have been confirmed in our system they are unable to be cancelled. There is no guarantee an order can be changed.
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

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                How long will it take for me to get my order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                Depending on the shipping service you have selected, after dispatch your order will arrive within 2-6 business days.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                How do I check on my order status?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                Via the tracking details sent at shipping confirmation.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                My parcel is taking longer than the estimated delivery time, what should I do?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                A veces pueden ocurrir retrasos que están fuera del control de Aneu. Si tienes un paquete retrasado, comunícate con el courrier con el número de guía, ellos tendrán la información más actualizada. En caso de que el courrier no responda, puedes contactarnos para ayudarte lo más pronto posible.
                Toma en cuenta que en feriados/días festivos/sales los paquetes pueden tardar más en llegar.
              </Text>
              <Text
                mb='10px'
              >
                At times delays can occur which are outside {`Aneu’s`} control. If you have a delayed parcel please reach out to the shipping carrier initially with your tracking number as they will have the most up to date information. Following this the customer care team can assist with any unanswered questions.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                My package is lost, what should I do?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                Escríbenos con tu número de orden y guía para poder ayudarte mejor.
              </Text>
              <Text
                mb='10px'
              >
                We encourage you to reach out to the shipping carrier responsible for delivery and quote your tracking number as they will have the most up to date information. If you still require assistance contact our Customer Care team.
                <strong> contact our Customer Care team.</strong>
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

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                How do I use a promo code or store credit code?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                Enter promotion code or store credit code at checkout at the top right hand side. Enter code in the box with text {`‘Gift card or discount code’`} and press Apply. This will minus the store credit amount from your order total, or apply the discount to the order.
              </Text>
              <Text
                mb='10px'
              >
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                What can I do if the promo code or store credit {`isn’t`} working?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                If you are experiencing issues with a promo code or store credit
                <br />
                <strong>contact our Customer Care team.</strong>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Are address changes possible after your order has been confirmed?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                If your order has been fulfilled address changes are not possible. If you request a change prior to fulfilment this may be possible but cannot be guaranteed.
              </Text>
              <Text
                mb='10px'
              >
                Si tu orden ya fue enviada no es posible cambiar la dirección.
                <br />
                Si tu orden no ha sido enviada, por favor contáctanos para hacer el cambio de dirección.
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

export default ShippingAndDeliveryPage;