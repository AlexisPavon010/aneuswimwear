import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import { Dispatch, SetStateAction, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import NextLink from 'next/link';
import { BsSearch } from 'react-icons/bs';

import { CartButton } from './CartButton';
import { openCartMenu } from '../../redux/ui/uiSlice';
import { Announcement } from './Announcement';

interface NavbarProps {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export const Navbar = ({ setIsOpenMenu }: NavbarProps) => {
  const [search, setSearch] = useState('')
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const dispatch = useDispatch()
  const router = useRouter()

  const onSearchTerm = () => {
    if (search.trim().length === 0) return
    router.push(`/search/${search}`)
  }

  return (
    <>
      <Announcement />
      <Box
        as="header"
        position='sticky'
        top={0}
        zIndex={3}
        bgColor='white'
      >
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container maxW='1900px' py={2}>
            <HStack
              display='grid'
              gridTemplateAreas={`'navigation heading icons'`}
              gridTemplateColumns={'1fr auto 1fr'}
            >
              <ButtonGroup variant="link" spacing="8" alignItems='center'>
                <FiMenu onClick={() => setIsOpenMenu(true)} fontSize="1.25rem" />
                {isDesktop ? (
                  <>
                    <NextLink href={`/gender/new`} >New</NextLink>
                    <NextLink href={`/gender/swimwear`} >Swimwear</NextLink>
                    <NextLink href={`/collections/all`} >Collections</NextLink>
                    <NextLink href={`/gender/sale`} >Sale</NextLink>
                  </>
                ) : null}
              </ButtonGroup>
              <Link
                as={NextLink}
                href='/'
                margin='0 !important'
                fontWeight={600}
                letterSpacing='4px'
              >
                ANEU SWIMWEAR
              </Link>
              <HStack spacing="3" justifyContent='end'>
                <InputGroup display={isDesktop ? 'flex' : 'none'} maxW='200px'>
                  <InputLeftElement
                    top='-7px'
                    left='-5px'
                    onClick={onSearchTerm}
                  >
                    <BsSearch />
                  </InputLeftElement>
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                    _focus={{ outline: 'none' }}
                    outline='none'
                    size='xs'
                    type='text'
                    variant='flushed'
                    placeholder='Search'
                  />
                </InputGroup>
                <CartButton onClick={() => dispatch(openCartMenu(true))} />
              </HStack>
            </HStack>
          </Container >
        </Box >
      </Box >
    </>
  )
}
