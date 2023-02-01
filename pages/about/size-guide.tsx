import { Box, Container, Divider, Flex, ListItem, OrderedList, SimpleGrid, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import NextImage from 'next/image'
import Head from "next/head";

const sizeGuidePage = () => {
  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Size Guide</title>
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
            src='/assets/IMG_0236.JPG'
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
      <Container maxW='1000px'>
        <Box p={{ base: '0px', lg: '30px' }}>
          <Text
            textAlign='center'
            fontSize={{ base: '30px', md: '36px', lg: '40px' }}
            mb='25px'
            as='h1'
          >
            ANEU SWIMWEAR SIZE GUIDE
          </Text>
          <Text
            m='25px 0'
            fontSize='24px'
            as='h2'
          >
            SIZE GUIDE
          </Text>
          <OrderedList
            margin='0 0 15px 30px'
          >
            <ListItem>Take exact measurements using soft tape measure.</ListItem>
            <ListItem>Measure bust, waist, and hips using our guide.</ListItem>
            <ListItem>If you are in between sizes, we recommend sizing up for best fit, or consulting the details on each product page for specific details.</ListItem>
          </OrderedList>
          <Text
            mb='25px'
          >
            To speak with a sizing expert please contact our Customer Care team.
          </Text>
          <Divider />
          <Text
            m='25px 0'
            fontSize='24px'
            as='h2'
          >
            HOW TO MEASURE
          </Text>
          <Flex
            align={{ base: 'center', lg: 'start' }}
            direction={{ base: 'column', lg: 'row' }}
            mb='40px'
            gap='20px'
          >
            <Box>
              <NextImage
                width={600}
                height={600}
                src='/assets/size-guide.jpg'
                alt="size guide"
              />
            </Box>
            <Box>
              <Text
                fontWeight={600}
                mb='20px'
              >
                Bust
              </Text>
              <Text
                mb='20px'
              >
                Measure around your chest at the fullest point of bust with no bra on. Make sure measuring tape is relaxed and not tight. Find your bust measurement from the guide as shown.
              </Text>
              <Text
                fontWeight={600}
                mb='20px'
              >
                Waist
              </Text>
              <Text
                mb='20px'
              >
                Consulting our guide, measure around the smallest part of your waist. Keep tape parallel to the floor and ensure one finger fits in between your body and the tape for a more comfortable fit.
              </Text>
              <Text
                fontWeight={600}
                mb='20px'
              >
                Hips
              </Text>
              <Text
                mb='20px'
              >
                Pass the metric tape in the largest part of your hips and buttocks. Keep the tape parallel to the ground. Join the ends at the front and record your measurement.
              </Text>
              <Text
                fontWeight={600}
                mb='20px'
              >
                Recommendations:
              </Text>
              <Text
                mb='20px'
              >
                • Keep your posture straight while taking measurements
                <br />
                • Avoid being too tight
                <br />
                • The tape should be in a straight line
                <br />
                {`• Don't hold your breath, don't stick your belly in while taking your measurements.`}
                <br />
                • In case you do not have a tape measure you can use a string and then measure with a ruler
              </Text>
            </Box>
          </Flex>
          <Divider />
          <Text
            textAlign='center'
            fontSize={{ base: '30px', md: '36px', lg: '40px' }}
            m='25px 0'
            as='h1'
          >
            SIZE CHART
          </Text>
          <Text
            fontSize='24px'
            m='25px 0'
            as='h2'
          >
            FIT
          </Text>
          <TableContainer mb='40px'>
            <Table border='1px solid #edf2f7' variant='simple'>
              <Thead>
                <Tr>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    SIZE
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    BUST
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    WAIST
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    HIPS
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border='1px solid #edf2f7'>XS</Td>
                  <Td border='1px solid #edf2f7'>82</Td>
                  <Td border='1px solid #edf2f7'>60</Td>
                  <Td border='1px solid #edf2f7'>87</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>S</Td>
                  <Td border='1px solid #edf2f7'>86</Td>
                  <Td border='1px solid #edf2f7'>65</Td>
                  <Td border='1px solid #edf2f7'>90</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>M</Td>
                  <Td border='1px solid #edf2f7'>90</Td>
                  <Td border='1px solid #edf2f7'>70</Td>
                  <Td border='1px solid #edf2f7'>95</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>L</Td>
                  <Td border='1px solid #edf2f7'>94</Td>
                  <Td border='1px solid #edf2f7'>75</Td>
                  <Td border='1px solid #edf2f7'>100</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>XXL</Td>
                  <Td border='1px solid #edf2f7'>98</Td>
                  <Td border='1px solid #edf2f7'>80</Td>
                  <Td border='1px solid #edf2f7'>105</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Divider />
          <Text
            fontSize='24px'
            m='25px 0'
            as='h2'
          >
            BOTTOM FIT
          </Text>
          <TableContainer mb='40px'>
            <Table border='1px solid #edf2f7' variant='simple'>
              <Thead>
                <Tr>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Size
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Waist Size (in)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Waist Size (cm)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Hips (in)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Hips (cm)
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border='1px solid #edf2f7'>XS</Td>
                  <Td border='1px solid #edf2f7'>23-24.5</Td>
                  <Td border='1px solid #edf2f7'>58-62</Td>
                  <Td border='1px solid #edf2f7'>33.5-36</Td>
                  <Td border='1px solid #edf2f7'>86-91</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>S</Td>
                  <Td border='1px solid #edf2f7'>24.5-27</Td>
                  <Td border='1px solid #edf2f7'>62-68</Td>
                  <Td border='1px solid #edf2f7'>36-38</Td>
                  <Td border='1px solid #edf2f7'>91-95</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>M</Td>
                  <Td border='1px solid #edf2f7'>27-29</Td>
                  <Td border='1px solid #edf2f7'>68-72</Td>
                  <Td border='1px solid #edf2f7'>38-39</Td>
                  <Td border='1px solid #edf2f7'>96-100</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>L</Td>
                  <Td border='1px solid #edf2f7'>29-31</Td>
                  <Td border='1px solid #edf2f7'>72+</Td>
                  <Td border='1px solid #edf2f7'>39-42</Td>
                  <Td border='1px solid #edf2f7'>100-106</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Divider />
          <Text
            fontSize='24px'
            m='25px 0'
            as='h2'
          >
            ONE-PIECES & CLOTHING
          </Text>
          <TableContainer mb='40px'>
            <Table border='1px solid #edf2f7' variant='simple'>
              <Thead>
                <Tr>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Size
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Bust Size (in)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Bust Size (cm)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Cup Size
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Hips (in)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Hips (cm)
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border='1px solid #edf2f7'>XS</Td>
                  <Td border='1px solid #edf2f7'>30-32</Td>
                  <Td border='1px solid #edf2f7'>76-82</Td>
                  <Td border='1px solid #edf2f7'>A-B</Td>
                  <Td border='1px solid #edf2f7'>33.5-36</Td>
                  <Td border='1px solid #edf2f7'>86-91</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>S</Td>
                  <Td border='1px solid #edf2f7'>32-34</Td>
                  <Td border='1px solid #edf2f7'>82-86</Td>
                  <Td border='1px solid #edf2f7'>B-C</Td>
                  <Td border='1px solid #edf2f7'>36-38</Td>
                  <Td border='1px solid #edf2f7'>91-96</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>M</Td>
                  <Td border='1px solid #edf2f7'>34-36</Td>
                  <Td border='1px solid #edf2f7'>86-91</Td>
                  <Td border='1px solid #edf2f7'>C-D</Td>
                  <Td border='1px solid #edf2f7'>38-39</Td>
                  <Td border='1px solid #edf2f7'>96-100</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>L</Td>
                  <Td border='1px solid #edf2f7'>36-38</Td>
                  <Td border='1px solid #edf2f7'>91-96.5</Td>
                  <Td border='1px solid #edf2f7'>D+</Td>
                  <Td border='1px solid #edf2f7'>39-42</Td>
                  <Td border='1px solid #edf2f7'>100-106</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Divider />
          <Text
            m='25px 0'
            fontSize='24px'
            as='h2'
          >
            COVERAGE GUIDE FOR BOTTOMS
          </Text>
          <SimpleGrid
            mb='40px'
            columns={{ base: 2, lg: 4 }}
            gap={{ base: '16px', lg: '25px' }}
          >
            <Box>
              <NextImage src='https://cdn.shopify.com/s/files/1/0266/3084/8621/files/Skimpy.jpg?12205' alt='' width={400} height={400} />
              <Text
                fontWeight={600}
                m='25px 0'
              >
                Skimpy
              </Text>
              <Text
                fontSize='14px'
              >
                Skimpy coverage bottoms offer the least amount of coverage for the most daring ladies. We highly recommend these bottoms as they flatter the female figure and exude confidence.
              </Text>
            </Box>
            <Box>
              <NextImage src='https://cdn.shopify.com/s/files/1/0266/3084/8621/files/Brazillian.jpg?12205' alt='' width={400} height={400} />
              <Text
                fontWeight={600}
                m='25px 0'
              >
                Brazilian
              </Text>
              <Text
                fontSize='14px'
              >
                With their Brazilian inspired cuts these style bottoms are eye-catching, flattering and on trend this season. These cuts are designed to make you feel your sexiest self this summer and are sure to turn heads.
              </Text>
            </Box>
            <Box>
              <NextImage src='https://cdn.shopify.com/s/files/1/0266/3084/8621/files/Cheeky.jpg?12205' alt='' width={400} height={400} />
              <Text
                fontWeight={600}
                m='25px 0'
              >
                Cheeky
              </Text>
              <Text
                fontSize='14px'
              >
                Cheeky bottoms offer more modest coverage while still showing off a little skin. These popular styles have form-fitting cuts which hug the body and create a great shape.
              </Text>
            </Box>
            <Box>
              <NextImage src='https://cdn.shopify.com/s/files/1/0266/3084/8621/files/Classic.jpg?12205' alt='' width={400} height={400} />
              <Text
                fontWeight={600}
                m='25px 0'
              >
                Classic
              </Text>
              <Text
                fontSize='14px'
              >
                Our classic style bottoms are a fuller coverage option while sill maintaining the Sommer aesthetic. These sleek bottoms have a comfortable style for every woman, with fits to flatter all body shapes.
              </Text>
            </Box>
          </SimpleGrid>
          <Divider />
          <Text
            textAlign='center'
            fontSize='36px'
            m='25px 0'
            as='h1'
          >
            LINGERIE SIZE GUIDE
          </Text>
          <Text
            fontSize='24px'
            m='25px 0'
            as='h2'
          >
            BODYSUIT
          </Text>
          <TableContainer mb='40px'>
            <Table border='1px solid #edf2f7' variant='simple'>
              <Thead>
                <Tr>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Size
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Bust Size (in)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Bust Size (cm)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Waist (in)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Waist (cm)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Hips (in)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Hips (cm)
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border='1px solid #edf2f7'>XS</Td>
                  <Td border='1px solid #edf2f7'>33-35</Td>
                  <Td border='1px solid #edf2f7'>84-88</Td>
                  <Td border='1px solid #edf2f7'>23-25</Td>
                  <Td border='1px solid #edf2f7'>59-63</Td>
                  <Td border='1px solid #edf2f7'>33-35</Td>
                  <Td border='1px solid #edf2f7'>85-89</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>S</Td>
                  <Td border='1px solid #edf2f7'>35-37</Td>
                  <Td border='1px solid #edf2f7'>89-93</Td>
                  <Td border='1px solid #edf2f7'>25-27</Td>
                  <Td border='1px solid #edf2f7'>64-68</Td>
                  <Td border='1px solid #edf2f7'>35-37</Td>
                  <Td border='1px solid #edf2f7'>90-94</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>M</Td>
                  <Td border='1px solid #edf2f7'>37-39</Td>
                  <Td border='1px solid #edf2f7'>94-98</Td>
                  <Td border='1px solid #edf2f7'>27-29</Td>
                  <Td border='1px solid #edf2f7'>69-73</Td>
                  <Td border='1px solid #edf2f7'>37-39</Td>
                  <Td border='1px solid #edf2f7'>95-99</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>L</Td>
                  <Td border='1px solid #edf2f7'>39-41</Td>
                  <Td border='1px solid #edf2f7'>99-103</Td>
                  <Td border='1px solid #edf2f7'>29-31</Td>
                  <Td border='1px solid #edf2f7'>74-78</Td>
                  <Td border='1px solid #edf2f7'>39-41</Td>
                  <Td border='1px solid #edf2f7'>100-104</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>XL</Td>
                  <Td border='1px solid #edf2f7'>41-43</Td>
                  <Td border='1px solid #edf2f7'>104-108</Td>
                  <Td border='1px solid #edf2f7'>31-33</Td>
                  <Td border='1px solid #edf2f7'>79-83</Td>
                  <Td border='1px solid #edf2f7'>41-43</Td>
                  <Td border='1px solid #edf2f7'>105-109</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Divider />
          <Text
            fontSize='24px'
            m='25px 0'
            as='h2'
          >
            BRA
          </Text>
          <TableContainer mb='40px'>
            <Table border='1px solid #edf2f7' variant='simple'>
              <Thead>
                <Tr>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Size
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Bra Cup
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Bust Size (in)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Bust Size (cm)
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border='1px solid #edf2f7'>XS</Td>
                  <Td border='1px solid #edf2f7'>32A</Td>
                  <Td border='1px solid #edf2f7'>33-35</Td>
                  <Td border='1px solid #edf2f7'>84-88</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>S</Td>
                  <Td border='1px solid #edf2f7'>32-34B</Td>
                  <Td border='1px solid #edf2f7'>35-37</Td>
                  <Td border='1px solid #edf2f7'>89-93</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>M</Td>
                  <Td border='1px solid #edf2f7'>34-36 B-C</Td>
                  <Td border='1px solid #edf2f7'>37-39</Td>
                  <Td border='1px solid #edf2f7'>94-98</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>L</Td>
                  <Td border='1px solid #edf2f7'>36 C-D</Td>
                  <Td border='1px solid #edf2f7'>39-41</Td>
                  <Td border='1px solid #edf2f7'>99-103</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>XL</Td>
                  <Td border='1px solid #edf2f7'>36 D</Td>
                  <Td border='1px solid #edf2f7'>41-43</Td>
                  <Td border='1px solid #edf2f7'>104-108</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Divider />
          <Text
            fontSize='24px'
            m='25px 0'
            as='h2'
          >
            PANTIES
          </Text>
          <TableContainer mb='40px'>
            <Table border='1px solid #edf2f7' variant='simple'>
              <Thead>
                <Tr>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Size
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Waist (in)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Waist (cm)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Hips (in)
                  </Th>
                  <Th
                    border='1px solid #edf2f7'
                    fontSize='14px'
                    color='#000'
                  >
                    Hips (cm)
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border='1px solid #edf2f7'>XS</Td>
                  <Td border='1px solid #edf2f7'>23-25</Td>
                  <Td border='1px solid #edf2f7'>59-63</Td>
                  <Td border='1px solid #edf2f7'>33-35</Td>
                  <Td border='1px solid #edf2f7'>85-89</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>S</Td>
                  <Td border='1px solid #edf2f7'>25-27</Td>
                  <Td border='1px solid #edf2f7'>64-68</Td>
                  <Td border='1px solid #edf2f7'>35-37</Td>
                  <Td border='1px solid #edf2f7'>90-94</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>M</Td>
                  <Td border='1px solid #edf2f7'>27-29</Td>
                  <Td border='1px solid #edf2f7'>69-73</Td>
                  <Td border='1px solid #edf2f7'>37-39</Td>
                  <Td border='1px solid #edf2f7'>95-99</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>L</Td>
                  <Td border='1px solid #edf2f7'>29-31</Td>
                  <Td border='1px solid #edf2f7'>74-78</Td>
                  <Td border='1px solid #edf2f7'>39-41</Td>
                  <Td border='1px solid #edf2f7'>100-104</Td>
                </Tr>
                <Tr>
                  <Td border='1px solid #edf2f7'>XL</Td>
                  <Td border='1px solid #edf2f7'>31-33</Td>
                  <Td border='1px solid #edf2f7'>79-83</Td>
                  <Td border='1px solid #edf2f7'>41-43</Td>
                  <Td border='1px solid #edf2f7'>105-109</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container >
    </Box >
  )
}

export default sizeGuidePage;