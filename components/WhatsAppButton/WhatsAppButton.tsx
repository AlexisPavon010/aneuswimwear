import { Button } from "@chakra-ui/react"
import { BsWhatsapp } from "react-icons/bs"

export const WhatsAppButton = () => {
  return (
    <Button
      height='56px'
      bottom='10px'
      right='10px'
      color='white'
      backgroundColor='#4dc247'
      boxShadow='2px 2px 6px rgb(0 0 0 / 40 %)'
      borderRadius='50%'
      position='fixed'
      rounded='full'
      zIndex={3}
      _hover={{}}
    >
      <BsWhatsapp size='24px' />
    </Button >
  )
}
