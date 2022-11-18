import { Box, Flex, Text, } from '@chakra-ui/react'
import NextLink from 'next/link'

interface Props {
  title: number;
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

const Sumary = ({ icon, subTitle, title }: Props) => {
  return (
    <Box
      p={8}
      borderWidth='1px'
      borderRadius='lg'
      boxShadow='4px 4px 4px 0px rgb(0 0 0 / 22%)'
    >
      <Flex justifyContent='space-between'>
        <Box>
          <Text>
            {subTitle}
          </Text>
          <Text
            fontSize='24px'
          >
            {title || 0}
          </Text>
        </Box>
        <Flex align='center'>
          {icon}
        </Flex>
      </Flex>
    </Box >
  )
}
