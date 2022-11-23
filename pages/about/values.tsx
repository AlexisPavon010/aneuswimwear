import { Box, Container, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import NextImage from 'next/image'

const ValuesPage = () => {
  return (
    <Box>
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
              VALUES
            </Text>
          </Box>
        </Flex>
      </Box>
      <Container maxW='1200px' p={{ base: '16px', lg: '30px' }}>
        <Text
          as='h2'
          mb='15px'
          fontWeight={600}
          fontSize={{ base: '20px', lg: '25px' }}
        >
          ETHICAL MANUFACTURING
        </Text>
        <Text
          mb='15px'
          fontSize='14px'
        >
          At Sommer Swim our relationships with the artisans who manufacture our pieces is integral to the company. Our swimwear is made at a family owned & operated factory exclusive to Sommer Swim in Bali, Indonesia. The relationship with our workers has been fostered over many years and they have become an extension of the brand. We work closely with our pattern makers and sewers to oversee every aspect of production from initial sampling to packing orders. All employees are paid above minimum wage and work regular hours with paid; holiday, sick, and maternity leave. Health, safety, and working conditions of the factory follow the internationally recognised standards of the Ethical Trading Initiative. https://www.ethicaltrade.org/eti-base-code.
        </Text>
        <Text
          as='h2'
          mb='15px'
          fontWeight={600}
          fontSize={{ base: '20px', lg: '25px' }}
        >
          RESPONSIBILITY
        </Text>
        <Text
          mb='15px'
          fontSize='14px'
        >
          Our high-quality Italian fabrics are sourced from a Green Company which optimises production processes by introducing cutting-edge technologies to monitor and reduce waste and polluting residuals. Our family-operated factory allows us to produce as required with no minimum order quantities, which in return minimises waste and cancels mass production practices. Our factory does not use water for production and recycles all plastic and paper waste.
        </Text>
        <Text
          mb='15px'
          fontSize='14px'
        >
          Sommer Swim is committed to producing swimwear consciously and ethically. Below are our key initiatives driving us toward long term sustainability in our garments and business practices.
        </Text>
        <UnorderedList
          fontSize='14px'
          m='0 0 15px 30px'
        >
          <ListItem>We produce limited quantities of products each collection and only produce styles as required to minimise waste and limit our environmental impact.</ListItem>
          <ListItem>We have eliminated the use of water from our production processes.</ListItem>
          <ListItem>All customer orders are packaged in a reusable organic cotton drawstring bag.</ListItem>
          <ListItem>All orders are shipped using 100% biodegradable packaging.</ListItem>
        </UnorderedList>
      </Container>
    </Box>
  )
}

export default ValuesPage;