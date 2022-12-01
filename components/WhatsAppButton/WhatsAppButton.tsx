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
        onClick={() => window.open('https://api.whatsapp.com/send/?phone=543751307791&text=Hi+%2AAneu%2A%21+I+need+more+info+about+Homepage+https%3A%2F%2Faneuswimwear.vercel.app&type=phone_number&app_absent=0')}
      >
        <BsWhatsapp size='24px' />
      </Button >
    </Tooltip>
  )
}
