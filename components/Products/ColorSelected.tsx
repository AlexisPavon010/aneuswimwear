import { Box, Stack } from "@chakra-ui/react"

interface ColorSelectedProps {
  setColorSelected: (value: number) => void
  colorSelected: number
}

export const ColorSelected = ({ colorSelected, setColorSelected }: ColorSelectedProps) => {
  const colors = ['red', 'orange', 'green', 'brown', 'aqua', 'black']
  return (
    <Stack m='10px 0' spacing={2} direction='row' align='center'>
      {colors.map((_, i) => (
        <Box
          key={i}
          onClick={() => setColorSelected(i)}
          transition='all .3s ease'
          rounded='full'
          h='30px'
          w='30px'
          bg={_}
          style={
            colorSelected == i ? {
              transform: 'scale(0.85)',
              boxShadow: '0 0 0 1px black',
              border: '2px solid white'
            } : {}
          }
        />
      ))}
    </Stack>
  )
}
