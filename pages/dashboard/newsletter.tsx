import { Box, Button, Link as ChakraLink, Flex, FormControl, FormErrorMessage, FormLabel, Input, SimpleGrid, Text, useToast, Image, Textarea } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useRef, useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { BsArrowLeft, BsTrash } from "react-icons/bs";

import { uploadFiles, deleteFiles, uploadNewsletter } from "../../client";
import { getNewsletter } from "../../database/dbNewsletter";

interface FormData {
  description: string;
  firstTitle: string;
  image: string[];
  secondTitle: string;
  subtitle: string;
  _id: string;
}

const NewsletterPage = ({ newsletter }: { newsletter: FormData }) => {
  const { register, handleSubmit, watch, formState: { errors }, getValues, setValue }: any = useForm({
    defaultValues: newsletter
  })
  const toast = useToast()
  const router = useRouter()
  const images = getValues('images')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (FormData: FormData) => {
    setIsLoading(true)
    try {
      const { data } = await uploadNewsletter(FormData)
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
        const [imageId, extension] = getValues('images')[0].substring(getValues('images')[0].lastIndexOf('/') + 1).split('.')
        const { data: urlImage } = await deleteFiles(imageId)
        setValue('images', [data.url], { shouldValidate: true })
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
            <ChakraLink display='flex' alignItems='center' onClick={() => router.push('/dashboard')}>
              <BsArrowLeft size='32px' />
            </ChakraLink>
            <Text
              ml={2}
              fontSize='24px'
              fontWeight={600}
            >
              Newsletter Modal
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
              <FormLabel>First Title</FormLabel>
              <Input
                {...register('firstTitle',
                  { required: 'first title is required' }
                )}
                type='text'
                focusBorderColor='none'
                placeholder="ENJOY"
              />
              <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.title}>
              <FormLabel>Second Title</FormLabel>
              <Input
                {...register('secondTitle',
                  { required: 'second title is required' }
                )}
                type='text'
                focusBorderColor='none'
                placeholder="10% OFF"
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
                placeholder="OFF YOUR FIRST ORDER"
              />
              <FormErrorMessage>{errors?.subtitle?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.subtitle}>
              <FormLabel>Description</FormLabel>
              <Textarea
                {...register('description',
                  { required: 'description is required' }
                )}
                type='text'
                focusBorderColor='none'
                placeholder="special sales, new arrivals & 10% off your first orden (Bassically FYI's on all the important stuff)"
              />
              <FormErrorMessage>{errors?.subtitle?.message}</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex direction='column' gap='20px'>
            <FormControl isInvalid={true}>
              <FormLabel>Image</FormLabel>
              <Button onClick={() => fileInputRef.current?.click()} w='100%'>Upload Image</Button>
              <input
                hidden
                ref={fileInputRef}
                onChange={onFileSelected}
                type="file"
                accept='image/png, image/gif, image/jpeg'
              />
              <FormErrorMessage>Only 1 image can be uploaded</FormErrorMessage>
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
  const newsletter = await getNewsletter()

  return {
    props: {
      newsletter
    }
  }
}

export default NewsletterPage;