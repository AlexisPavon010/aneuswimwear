import { Dispatch, SetStateAction } from "react"
import { Flex, IconButton, Text } from "@chakra-ui/react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

interface ItemCounterProps {
  count: number;
  maxCount: number;
  setCounter: (value: number) => void;
}

export const ItemCounter = ({ count, maxCount, setCounter }: ItemCounterProps) => {

  const addOrRemove = (value: number) => {
    if (value === -1) {
      if (count === 1) return;
      return setCounter(count - 1)
    }
    if (count >= maxCount) return;
    setCounter(count + 1)
  }

  return (
    <Flex py={2} alignItems='center'>
      <IconButton onClick={() => addOrRemove(- 1)} size='sm' aria-label='Plus' icon={<AiOutlineMinus />} />
      <Text
        w='40px'
        textAlign='center'
      >
        {count}
      </Text>
      <IconButton onClick={() => addOrRemove(+ 1)} size='sm' aria-label='Minus' icon={<AiOutlinePlus />} />
    </Flex>
  )
}
