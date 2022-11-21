import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  useToast
} from "@chakra-ui/react"
import { BsArrowLeft, BsTrash } from "react-icons/bs"
import { ChangeEvent, useRef, useState } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form";
import { GetServerSideProps } from "next";

import { deleteFiles, uploadBanner, uploadFiles } from "../../client";
import { getBanner } from "../../database/dbBanner";


interface Props {

}

const BannerPage = ({ banner }: any) => {
  const { register, handleSubmit, watch, formState: { errors }, getValues, setValue }: any = useForm({
    defaultValues: banner
  })
  const toast = useToast()
  const router = useRouter()
  const images = getValues('images')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (FormData: any) => {
    setIsLoading(true)
    try {
      const { data } = await uploadBanner(FormData)
      console.log(data)
      toast({
        title: 'update success',
        status: 'success',
        isClosable: true,
      })
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error',
        status: 'error',
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files || target.files.length === 0) {
      return;
    }

    try {

      for (const file of target.files) {
        const formData = new FormData()
        formData.append('file', file)
        const { data } = await uploadFiles(formData)
        setValue('images', [...getValues('images'), data.url], { shouldValidate: true })
      }

    } catch (error) {
      console.log(error)
    }
  }


  const onDeletedImage = async (image: string) => {
    setValue('images', getValues('images').filter((img: string) => img !== image), { shouldValidate: true })
    const [imageId, extension] = image.substring(image.lastIndexOf('/') + 1).split('.')
    const { data } = await deleteFiles(imageId)
    toast({
      title: 'remove success',
      status: 'success',
      isClosable: true,
    })
  }

  return (
    <Box>
      <Box p={8}>
        <Flex justifyContent='space-between' >
          <Flex>
            <ChakraLink display='flex' alignItems='center' onClick={() => router.back()}>
              <BsArrowLeft size='32px' />
            </ChakraLink>
            <Text
              ml={2}
              fontSize='24px'
              fontWeight={600}
            >
              Banner
            </Text>
          </Flex>
          <Button
            isLoading={isLoading}
            onClick={handleSubmit(onSubmit)}
          >
            Guardar
          </Button>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap='20px'
        >
          <Flex direction='column'>
            <FormControl isInvalid={errors.title}>
              <FormLabel>Title</FormLabel>
              <Input
                {...register('title',
                  { required: 'title is required' }
                )}
                type='text'
                focusBorderColor='none'
              />
              <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.subtitle}>
              <FormLabel>Subtitle</FormLabel>
              <Input
                {...register('subtitle',
                  { required: 'subtitle is required' }
                )}
                type='text'
                focusBorderColor='none'
              />
              <FormErrorMessage>{errors?.subtitle?.message}</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex direction='column' gap='20px'>
            <FormControl isInvalid={true}>
              <FormLabel>Images</FormLabel>
              <Button onClick={() => fileInputRef.current?.click()} w='100%'>Upload Images</Button>
              <input
                multiple
                hidden
                ref={fileInputRef}
                onChange={onFileSelected}
                type="file"
                accept='image/png, image/gif, image/jpeg'
              />
              <FormErrorMessage>A minimum of 2 images are required</FormErrorMessage>
            </FormControl>
            <Flex wrap='wrap' gap='8px'>
              {images?.map((img: string, i: number) => (
                <Flex
                  key={i}
                  borderRadius='8px'
                  overflow='hidden'
                  transition='all 0.8s ease'
                  position='relative'
                  _hover={{
                    transition: 'all 0.8s ease',
                  }}
                >
                  <Flex
                    onClick={() => onDeletedImage(img)}
                    justifyContent='center'
                    align='center'
                    transition='all 0.5s ease'
                    w='100%'
                    h='100%'
                    opacity={0}
                    _hover={{
                      opacity: 1,
                      background: '#00000080',
                    }}
                    position='absolute'
                    top={0}
                    bottom={0}
                    left={0}>
                    <BsTrash size='30px' color='white' />
                  </Flex>
                  <Image objectFit='cover' w='90px' h='90px' src={img} alt='product-img' />
                </Flex>
              ))}
            </Flex>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const banner = await getBanner()

  return {
    props: {
      banner
    }
  }
}

export default BannerPage