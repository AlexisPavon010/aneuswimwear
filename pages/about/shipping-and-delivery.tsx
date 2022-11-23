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
                North America
              </Text>
              <Text
                mb='10px'
              >
                USPS Standard (4-6 business days)
                <br />
                UPS Expediated (2-3 business days)
                <br />
                UPS Overnight (Business Day shipping and delivery only - see policies for exclusions)
              </Text>
              <Text
                fontWeight={600}
                mb='10px'
              >
                Europe and International
              </Text>
              <Text
                mb='10px'
              >
                Express varying DHL/UPS/Fedex (3-5 business days)
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
                North America
              </Text>
              <Text
                mb='10px'
              >
                Depending on the shipping service you have selected, after dispatch, your order will arrive within 1-6 business days. Please note weekend days are not business days. Please allow 1-2 business day for processing. Please note that transit times are measured at the point of dispatch. For Overnight Shipping exclusions include Hawaii, Puerto rico, Alaska, PO boxes and military bases.
              </Text>
              <Text
                fontWeight={600}
                mb='10px'
              >
                Europe and International
              </Text>
              <Text
                mb='10px'
              >
                After dispatch, your order will arrive within 3-5 business days.  Some remote addresses in European countries may be shipped with an International service with estimated 8-10 business days delivery.
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
                fontWeight={600}
                mb='10px'
              >
                North America
              </Text>
              <Text
                mb='10px'
              >
                Parcels are shipped locally within the USA and Canada, meaning no customs duties are incurred. Orders to Mexico are subject to customs.
              </Text>
              <Text
                fontWeight={600}
                mb='10px'
              >
                Europe and International
              </Text>
              <Text
                mb='10px'
              >
                Customs duties and/or VAT are calculated and included at checkout for EU countries meaning there will be no surprise fees. Customs duties and/or VAT may apply to countries outside the EU. Customs duties are at the discretion of the destination country and are the responsibility of the customer. Sommer Swim is not responsible for any customs charges or local taxes due to international shipment. Please familiarise yourself with your countries regulations as payment of these duties may be necessary to release your order.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                If a parcel is rejected on arrival what will the process be?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                mb='10px'
              >
                In the event that is parcel is not claimed or is rejected/refused by the receiver for any reason - DHL or the relevant carrier will return this parcel to Sommer Swim. Consequently there will be a $60 fee deducted from your store credit to cover return shipping due to your refusal.
                <strong> This is non-negotiable. </strong>
                Any customs fees paid at checkout for EU countries will be non-refundable in the circumstance of a rejected parcel. In addition to this any parcel returned to sender due to incorrect address will incur a fee ($10-US, $60-EU).
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
                If you need to change your order, please contact us immediately. We process orders quickly, and once our warehouse has processed your order we will be unable to make changes. Once orders have been confirmed in our system they are unable to be cancelled. There is no guarantee an order can be changed.
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
                At times delays can occur which are outside Sommer Swim’s control, and which we are not responsible for. If you have a delayed parcel please reach out to the shipping carrier initially with your tracking number as they will have the most up to date information. Following this the customer care team can assist with any unanswered questions.
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
                At times delays can occur which are outside Sommer Swim’s control, and which we are not responsible for. If you have a delayed parcel please reach out to the shipping carrier initially with your tracking number as they will have the most up to date information. Following this the customer care team can assist with any unanswered questions.
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
                We encourage you to reach out to the shipping carrier responsible for delivery and quote your tracking number as they will have the most up to date information. If you still require assistance
                <br />
                <strong> contact our Customer Care team.</strong>
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
                Enter promotion code or store credit code at checkout at the top right hand side. Enter code in the box with text ‘Gift card or discount code’ and press Apply. This will minus the store credit amount from your order total, or apply the discount to the order.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                What can I do if the promo code or store credit isn’t working?
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
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </Container>
    </Box>
  )
}

export default ShippingAndDeliveryPage;