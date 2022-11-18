import {
  Menu,
  MenuButton,
  Flex,
  MenuList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  RadioGroup,
  Stack,
  Radio,
  Box
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { AiOutlineFilter } from "react-icons/ai"

export const FilterMenu = () => {
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [sort, setSort] = useState('')
  const router = useRouter()

  const updateQuery = (size: string, color: string, sort: string) => {
    let query = {}
    if (size) {
      query = { ...query, size }
    }
    if (color) {
      query = { ...query, color }
    }
    if (sort) {
      query = { ...query, sort }
    }
    router.push({
      pathname: router.asPath,
      query: query,
    });
  };

  useEffect(() => {
    updateQuery(size, color, sort)
  }, [size, color, sort])

  return (
    <Menu>
      <MenuButton>
        <Flex align='center'>
          <AiOutlineFilter />
          Filter
        </Flex>
      </MenuButton>
      <MenuList padding={0}>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Size
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup onChange={setSize} value={size}>
                <Stack spacing={5} direction='column'>
                  <Radio value='S'>S</Radio>
                  <Radio value='M' >M</Radio>
                  <Radio value='L' >L</Radio>
                  <Radio value='XL'>XL</Radio>
                  <Radio value='XXL'>XXL</Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Color
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup onChange={setColor} value={color}>
                <Stack spacing={5} direction='column'>
                  <Radio value='red' colorScheme='red'>Red</Radio>
                  <Radio value='yellow' colorScheme='yellow'>Yellow</Radio>
                  <Radio value='green' colorScheme='green'>Green</Radio>
                  <Radio value='orange' colorScheme='orange'>Orange</Radio>
                  <Radio value='blackAlpha' colorScheme='blackAlpha'>Black</Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Sort
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup onChange={setSort} value={sort}>
                <Stack spacing={5} direction='column'>
                  <Radio value='name_asc'>Name: A - Z</Radio>
                  <Radio value='name_des'>Name: Z - A</Radio>
                  <Radio value='low-to-high'>Price: Low to High</Radio>
                  <Radio value='high-to-low'>Price: High to Low</Radio>
                  {/* <Radio value='newest'>Newest</Radio> */}
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </MenuList>
    </Menu >
  )
}