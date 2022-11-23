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
              <Text>
                We accept bikinis purchased from sommerswim.com in new condition with tags and liners in tact <strong> for store credit. </strong>
                Return shipping is at customer expense. You have 21 days from the day your delivery arrived to send them back to us for store credit.
                Please note sale items are final sale are not eligible for return. Sale items including full price items purchased at a discount of more
                than 15% are not eligible for return. For sanitary reasons please try on swimwear over your underwear, we do not accept exchanges that are
                worn or are soiled/stained. <strong> Important: Return Form is Required to be Filled Out with RMA and Order Number in order to identify your return. </strong>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Is it easy to return items?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Super easy- initiate a return through our return portal on our website by clicking ‘start a return’.
                You’ll then follow the prompts to return eligible items for store credit.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                How soon will I get my store credit?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                {`Once your items are inspected by the returns team, you'll get your store credit notification via email typically
                within 6-10 business days (North American customers) and 10-14 business days (Europe/International customers).`}
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                Can I return Final Sale Items or Items purchased with a Discount Code?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                All items marked as final sale, or with a Discount Code of above 15% have been reduced in price and cannot be returned for an
                exchange to store credit. We understand that buying final sale items can be tricky, so if you have any questions about sizing,
                fit or fabric please contact our <strong> Customer Care team </strong> and review our size chart before placing your order.
                No exceptions can be made for sizing, fit or fabric issues on final sale items.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                What items are exchangeable?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <UnorderedList>
                <ListItem>
                  Items within 21 days of their arrival date.
                </ListItem>
                <ListItem>
                  Full priced items in new condition. Item must be undamaged, unworn, unwashed with tags attached and in original packaging.
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                What items are non-exchangeable?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <UnorderedList>
                <ListItem>
                  Items marked as final sale.
                </ListItem>
                <ListItem>
                  Free gifts or promotional items with retail value.
                </ListItem>
                <ListItem>
                  Sale items including items purchased during flash sales or with a code above 15%
                </ListItem>
                <ListItem>
                  Items that have been worn or are soiled/stained.
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                What to do if you experience issues with your items?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                {`We are confident you’ll love your pieces however if there are any issues with quality or a
                fault we will resolve this quickly. Please contact our`}
                <strong> Customer Care team.</strong>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p='20px'>
              <Box flex='1' textAlign='left'>
                What happens if your exchange is rejected by our returns team?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Any items received that are not in original condition, in packaging with panty liner in tact and tags attached or
                have stains/soiling will be immediately shipped back to you from our returns warehouse. We are unable to issue store
                credits on these items for sanitary reasons. Shipping costs will be covered by deducting from store credit.
                (North America $10, Europe and International $25).
              </Text>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </Container>
    </Box>
  )
}

export default ReturnsExchangesPage;