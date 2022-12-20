import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react"
import { MdOutlineCategory, MdOutlineDashboard, MdPersonOutline } from 'react-icons/md'
import { IoTicketOutline } from 'react-icons/io5'
import { BsSearch } from 'react-icons/bs'
import { IoExitOutline } from 'react-icons/io5'
import { AiOutlineTool, AiOutlineUserAdd } from 'react-icons/ai'
import useSWR from 'swr'
import { groq } from 'next-sanity'

import { sanityClient } from '../../sanity'

interface SideMenuProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const { data: collections = [], error } = useSWR(
    groq`
    *[_type == 'collections' ]{
    title,
    "slug":slug.current
    }`,
    (query) => sanityClient.fetch(query));

  const { data: session }: any = useSession()

  const handleNavigate = (path: string) => {
    onClose(false)
    router.push(path)
  }

  const onSearchTerm = () => {
    if (search.trim().length === 0) return
    router.push(`/search/${search}`)
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={() => onClose(false)}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Flex align='center' direction='column' justifyContent='center'>
            <Image w='100px' src='/assets/logo_negro.png' alt='logo' />
            <Text
              mt={2}
              fontWeight={600}
              fontSize='14px'
              letterSpacing='4px'
            >
              ANEU SWIMWEAR
            </Text>
          </Flex>
        </DrawerHeader>
        <Divider />
        <DrawerBody>
          <InputGroup>
            <InputLeftElement>
              <BsSearch onClick={onSearchTerm} />
            </InputLeftElement>
            <Input
              name="country"
              type='text'
              placeholder='Search'
              focusBorderColor='none'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
            />
          </InputGroup>
          {session ? (
            <>
              <MenuItem icon={<MdPersonOutline size='24px' />} title='Profile' onClick={() => { }} />
              <MenuItem icon={<IoTicketOutline size='24px' />} title='My orders' onClick={() => handleNavigate('/order/history')} />
              <MenuItem icon={<IoExitOutline size='24px' />} title='Log out' onClick={() => signOut()} />
            </>
          ) : (
            <MenuItem title='Log in' onClick={() => handleNavigate('/auth/signin')} />
          )}

          {session?.user.role === 'admin' && (
            <>
              <Divider />
              <MenuItem icon={<MdOutlineDashboard size='24px' />} title='Dashboard' onClick={() => handleNavigate('/dashboard')} />
              <MenuItem icon={<MdOutlineCategory size='24px' />} title='Products' onClick={() => handleNavigate(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL!}/products`)} />
              <MenuItem icon={<IoTicketOutline size='24px' />} title='Orders' onClick={() => handleNavigate('/dashboard/orders')} />
              <MenuItem icon={<AiOutlineUserAdd size='20px' />} title='Users' onClick={() => handleNavigate('/dashboard/users')} />
              <MenuItem icon={<AiOutlineTool size='20px' />} title='Banner' onClick={() => handleNavigate(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL!}/banner`)} />
              <MenuItem icon={<AiOutlineTool size='20px' />} title='Newsletter' onClick={() => handleNavigate(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL!}/newsletter`)} />
            </>
          )}

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton p='8px 12px'>
                  <Box flex='1' textAlign='left' fontWeight={600}>
                    News
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={0}>
                <Flex flexDirection='column'>
                  <Link
                    onClick={() => handleNavigate('/collections/all-swim')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    All swimwear
                  </Link>
                  <Link
                    onClick={() => handleNavigate('/collections/bottoms')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Bottoms
                  </Link>
                  <Link
                    onClick={() => handleNavigate('/collections/best-sellers')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Best Sellers
                  </Link>
                  <Link
                    onClick={() => handleNavigate('/collections/all')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Summer Favorites
                  </Link>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton p='8px 12px'>
                  <Box flex='1' textAlign='left' fontWeight={600}>
                    Swimwear
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={0}>
                <Flex direction='column'>
                  <Link
                    onClick={() => handleNavigate('/collections/all-swim')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    All Swim
                  </Link>
                  <Link
                    onClick={() => handleNavigate('/collections/bottoms')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Bottoms
                  </Link>
                  <Link
                    onClick={() => handleNavigate('/collections/one-pieces')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    One Pieces
                  </Link>
                  <Link
                    onClick={() => handleNavigate('/collections/tops')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Tops
                  </Link>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton p='8px 12px'>
                  <Box flex='1' textAlign='left' fontWeight={600}>
                    Collections
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={0}>
                <Flex direction='column'>
                  {collections.map(({ slug, title }: { slug: string, title: string }, i: number) => (
                    <Link
                      key={i}
                      href={`/collections/${slug}`}
                      _hover={{ background: 'rgb(244, 245, 246)' }}
                      padding='8px 0px 8px 36px'
                    >
                      {title}
                    </Link>
                  ))}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <MenuItem title='About Aneu' onClick={() => handleNavigate('/about')} />
          <MenuItem title='Size Guide' onClick={() => handleNavigate('/about/size-guide')} />
          <MenuItem title='Shipping & Delivery' onClick={() => handleNavigate('/about/shipping-and-delivery')} />
          <MenuItem title='Returns & Exchanges' onClick={() => handleNavigate('/about/returns-exchanges')} />
          <MenuItem title='FaQs' onClick={() => handleNavigate('/about/faq')} />
          <MenuItem title='Contact Us' onClick={() => handleNavigate('/about/contact-us')} />
        </DrawerBody>
      </DrawerContent>
    </Drawer >
  )
}

const MenuItem = ({ icon, title, onClick }: { icon?: JSX.Element, title: string, onClick: MouseEventHandler<HTMLDivElement> }) => {
  if (!icon) {
    return (
      <Flex
        onClick={onClick}
        _hover={{ background: 'rgb(244, 245, 246)' }}
        margin=' 4px 0px'
        padding=' 8px 0px'
        cursor='pointer'
      >
        <Text
          ml={3}
          fontSize='14px'
          fontWeight={600}
        >
          {title}
        </Text>
      </Flex >
    )
  }
  return (
    <Flex
      onClick={onClick}
      _hover={{ background: 'rgb(244, 245, 246)' }}
      margin=' 4px 0px'
      padding=' 8px 0px'
      cursor='pointer'
    >
      {icon}
      <Text
        ml={3}
        fontSize='14px'
        fontWeight={600}
      >
        {title}
      </Text>
    </Flex >
  )
}

export default SideMenu;