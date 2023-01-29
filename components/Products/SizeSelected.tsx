import { Button, Stack } from "@chakra-ui/react"

interface SizeSelectedProps {
  sizes: any;
  selectedSize?: string;
  onSelectedSize: (value: string) => void
}

export const SizeSelected = ({ sizes, selectedSize, onSelectedSize }: SizeSelectedProps) => {

  return (
    <Stack m='10px 0' spacing={1} direction='row' align='center'>
      {sizes?.map((size: string, i: number) => (
        <Button
          key={i}
          p={0}
          fontSize='13px'
          fontWeight={600}
          rounded='full'
          variant={'solid'}
          colorScheme={selectedSize === size ? 'blue' : 'gray'}
          onClick={() => onSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </Stack>
  )
}
