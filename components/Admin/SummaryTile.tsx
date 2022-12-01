import { Box, Flex, Text, } from '@chakra-ui/react'
import NextLink from 'next/link'

interface Props {
  title: number;
  color: string;
  subTitle: string;
  icon?: JSX.Element;
  path?: string;
}

export const SummaryTile = (props: Props) => {
  if (!props.path) return <Sumary {...props} />
  return (
    <NextLink href={props.path}>
      <Sumary {...props} />
    </NextLink>
  )
}

const Sumary = ({ icon, subTitle, title, color }: Props) => {
  return (
    <Box
      p={4}
      borderRadius='4px'
      boxShadow='0 .125rem .25rem rgba(0,0,0,.075)'
      border='1px solid rgba(0,0,0,.125)'
      bgColor='white'
    >
      <Flex>
        <Flex
          mr={2}
          height='48px'
          width='48px'
          bg={color}
          align='center'
          justifyContent='center'
          borderRadius='50%'
        >
          {icon}
        </Flex>
        <Box>
          <Text
            fontWeight={600}
          >
            {subTitle}
          </Text>
          <Text>
            {title || 0}
          </Text>
        </Box>
      </Flex>
    </Box >
  )
}
