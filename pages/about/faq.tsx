import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Flex, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import Head from "next/head";

const FaqPage = () => {
  return (
    <Box>
      <Head>
        <title>Aneuswimwear | FAQs</title>
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
            src='/assets/IMG_6392.JPG'
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
          fontSize={{ base: '30px', md: '36px', lg: '40px' }}
          fontWeight={600}
          align='center'
          mb='25px'
        >
          ANEU SWIMWEAR FAQS
        </Text>
        <Accordion
          allowMultiple
          mb='60px'
        >

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                How do I place an order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Ordering online from ANEU SWIMWEAR is easy! When viewing an item,
                simply select your size and quantity needed and then click
                ‘Add to Cart’. You can review the items in your Cart at any time by
                clicking on the ‘Cart’ icon in the top right corner of every page.
                Once you have reviewed the items in your shopping cart, you can either
                continue shopping or continue to checkout and place your order.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                How do I checkout?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Once you have your selected items in your Cart, simply click the ‘Checkout’ button.
                You will then be prompted to either sign in to your account, or enter contact details.
                Next, choose your preferred shipping method and enter any discount codes or credit vouchers
                that you may want to use. Finally, you will be directed to complete payment. A confirmation
                email will be sent to your registered email address containing the contents of your order!
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                I’ve just placed an order. Where is my confirmation email?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Please allow up to 2 hours for your confirmation email to be received in your registered email address inbox.
                We recommend checking your Junk/Spam mail folder as well. If you do not receive a confirmation email within this
                time frame, simply contact our Customer Care team.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                I’m unable to place my order. What do I do?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                If an error message keeps occurring in your checkout process, more often than not there is a credit card problem,
                or a defect with the billing or shipping address you are trying to use. To fix this error, try re-formatting the names
                and addresses in your billing or shipping information. You can also try shopping from a new browser or using a different
                payment method such as PayPal. If the error message keeps re-occurring, please contact our<strong> Customer Care team.</strong>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Did you receive the order I just placed?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                After you place your order on aneuswimwear.com, a confirmation email will be sent to your email address once it has been processed.
                If you do not receive a confirmation email within 24 hours, please<strong> Customer Care team.</strong>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Can I cancel/make changes to the order I just placed?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Generally we are unable to make manual changes, however if the order has not been shipped it may be possible.
                We process orders quickly, so changes cannot always be accommodated. Please immediately contact our Customer
                Care team with your change request details included in the email. Please note our customer care team works on a
                different time zone to some of our online store locations.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                I have reached out to the customer care team and am yet to hear back. What should I do?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Our customer care team is available 9am till 5pm business days. Please be mindful our team works
                internationally and may be on a differing time zone. Please allow 24 business hours for a response
                to be received. Your enquiry is important to us and we appreciate your patience as we respond to your
                enquiries as promptly as possible.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Do you have a size chart?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                We have a size guide for you to follow, but if you have specific questions about an item that are not already
                mentioned in the details section on each product please contact our <strong> Customer Care team.</strong>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                It looks like my card was charged twice. Why?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                pb='10px'
              >
                What you may be seeing is an authorisation. This is a common bank practice handling credit card transactions to ensure sufficient
                funds and account authenticity. This authorisation will clear and you will see one charge for the order you have placed. Please note
                that your bank may take up to 48 hours to clear the authorisation. If you need help speeding up the process you can contact the issuing
                bank of your credit card.
              </Text>
              <Text>
                Please only click the ‘Complete Order’ button once during checkout and allow this to finish processing to avoid duplicate orders being placed.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Can I cancel my order without being charged?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Unfortunately, we are not able to cancel an order after it has confirmed through our system and payment has been received.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                What does our newsletter allow you to receive?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                The ANEU SWIMWEAR newsletter notifies you of all of our latest arrivals,
                upcoming promotions, secret discount codes and other exclusive offers. Don’t miss out and sign up today!
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Where is my order? I have not received it yet?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                You will receive a confirmation email once your order has been shipped that contains your tracking information.
                If you have not received a shipping confirmation email, please check your Junk Mail or Spam folder, as it may have
                been received there.
              </Text>
              <Text
                pb='10px'
              >
                For all orders, please allow 2-6 business days from the date of shipment for your parcel to arrive.
              </Text>
              <Text>
                <strong>
                  Business days do not include weekends or national public holidays and the delivery time frame excludes delays caused during international custom’s processing.
                </strong>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* DESDES AQUI  */}

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                The tracking number for my number isn’t showing any tracking updates. Where is it?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Tracking updates at times don’t reflect the exact location of your parcel . Please allow ample time for tracking to update as this may occur when the parcel reaches the delivery postal depot.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                What if the item I am interested in is sold out in my size?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                pb='10px'
              >
                All current season items are restocked throughout the year. You can register for immediate email notifications of a restock on the product page of the item you are interested in. Due to the popularity of our range, we cannot guarantee that we will have the requested size in stock to exchange. We cannot set items aside for exchange.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Can I exchange a sale item?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                pb='10px'
              >
                <strong>There are no exchanges on sale items. </strong> All sale items are sold as final sale only. Please refer to our Returns Policy at our Returns and Exchanges page for further details.
              </Text>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Where are your ANEU SWIMWEAR items designed and manufactured?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text
                pb='10px'
              >
                ANEU SWIMWEAR Designed and manufactured in the Ecuadorian Coast in Guayaquil City.
              </Text>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </Container>
    </Box>
  )
}

export default FaqPage;