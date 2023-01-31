import { Button, Tooltip } from "@chakra-ui/react"
import { BsWhatsapp } from "react-icons/bs"

export const WhatsAppButton = () => {
  return (
    <Tooltip hasArrow label='Need Help?' placement='left'>
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
        onClick={() => window.open('https://api.whatsapp.com/send/?phone=593982922066&text=Hello+%2AAneu&type=phone_number&app_absent=0')}
      >
        <BsWhatsapp size='24px' />
      </Button >
    </Tooltip>
  )
}
