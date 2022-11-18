import { Dispatch, SetStateAction, useState } from 'react'
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
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react"
import { MdOutlineCategory, MdOutlineDashboard, MdPersonOutline } from 'react-icons/md'
import { IoTicketOutline } from 'react-icons/io5'
import { BsKey, BsSearch } from 'react-icons/bs'
import { IoExitOutline } from 'react-icons/io5'
import { AiOutlineUserAdd } from 'react-icons/ai'

interface SideMenuProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const [search, setSearch] = useState('')
  const router = useRouter()

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
          <Box p={2} />
        </DrawerHeader>
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
              <MenuItem icon={<MdPersonOutline size='24px' />} title='Profile' />
              <MenuItem icon={<IoTicketOutline size='24px' />} title='My orders' onClick={() => handleNavigate('/order/history')} />
              <MenuItem icon={<IoExitOutline size='24px' />} title='Log out' onClick={() => signOut()} />
            </>
          ) : (
            <MenuItem icon={<BsKey size='24px' />} title='Log in' onClick={() => handleNavigate('/auth/signin')} />
          )}

          {session?.user.role === 'admin' && (
            <>
              <Divider />
              <MenuItem icon={<MdOutlineDashboard size='24px' />} title='Dashboard' onClick={() => handleNavigate('/dashboard')} />
              <MenuItem icon={<MdOutlineCategory size='24px' />} title='Products' onClick={() => handleNavigate('/dashboard/products')} />
              <MenuItem icon={<IoTicketOutline size='24px' />} title='Orders' onClick={() => handleNavigate('/dashboard/orders')} />
              <MenuItem icon={<AiOutlineUserAdd size='20px' />} title='Users' onClick={() => handleNavigate('/dashboard/users')} />
            </>
          )}

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
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
                    onClick={() => handleNavigate('/collections/all')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Summer Favorites
                  </Link>
                  <Link
                    onClick={() => handleNavigate('/collections/best-sellers')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Best Sellers
                  </Link>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
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
                    onClick={() => handleNavigate('/collections/tops')}
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Tops
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
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontWeight={600}>
                    Collections
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={0}>
                <Flex direction='column'>
                  <Link
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Mykonos Madness
                  </Link>
                  <Link
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Villa Capri
                  </Link>
                  <Link
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Casa Monte
                  </Link>
                  <Link
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Bright Mania
                  </Link>
                  <Link
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Floral Dreams
                  </Link>
                  <Link
                    _hover={{ background: 'rgb(244, 245, 246)' }}
                    padding='8px 0px 8px 36px'
                  >
                    Classics
                  </Link>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

        </DrawerBody>
      </DrawerContent>
    </Drawer >
  )
}

const MenuItem = ({ icon, title, onClick }: any) => {
  return (
    <Flex
      onClick={onClick}
      _hover={{ background: 'rgb(244, 245, 246)' }}
      margin=' 4px 0px'
      padding=' 8px 0px'
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