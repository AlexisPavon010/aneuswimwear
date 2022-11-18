import { Box, Drawer, DrawerContent, DrawerOverlay, Spinner } from "@chakra-ui/react"

export const FullLoadingScreen = () => {
  return (
    <Box height='100vh'>
      <Drawer
        isOpen={true}
        onClose={() => { }}>
        <DrawerOverlay display='flex' justifyContent='center' alignItems='center'>
          <Spinner size='xl' color='blue.500' thickness='4px' speed='0.65s' />
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}
