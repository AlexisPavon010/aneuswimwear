import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Link as ChakraLink,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useToast,
  Textarea,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next'
import { useForm } from "react-hook-form";
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { BsArrowLeft, BsCurrencyDollar, BsTrash } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { dbProducts } from '../../../database'
import { IProduct } from '../../../interfaces/Product'
import { Product } from '../../../models';
import { createProduct, deleteFiles, updateProduct, uploadFiles } from '../../../client';

interface Props {
  product: IProduct;
}

const ProductAdminPages: NextPage<Props> = ({ product }) => {
  const { register, handleSubmit, watch, formState: { errors }, getValues, setValue }: any = useForm({
    defaultValues: product
  })
  const [isLoading, setIsLoading] = useState(false)
  const [tagValue, setTagValue] = useState('')
  const toast = useToast()
  const tags = getValues('tags')
  const images = getValues('images')
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onSubmit = async (formData: IProduct) => {
    setIsLoading(true)
    try {
      if (product._id) {
        const { data } = await updateProduct(formData)
        toast({
          title: 'update success',
          status: 'success',
          isClosable: true,
        })
        router.back()
      } else {
        const { data } = await createProduct(formData)
        toast({
          title: 'create success',
          status: 'success',
          isClosable: true,
        })
        router.back()
      }
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

  const removeSelectTags = (index: number) => {
    const newTag = tags.filter((_: string, i: number) => i !== index);
    setValue('tags', newTag, { shouldValidate: true })
  }

  const handleKeyDown = (e: any) => {
    if (e.target.value.length === 0) return

    const newTag = tagValue.trim().toLowerCase()
    const currentTags = getValues('tags')

    if (currentTags.includes(newTag)) {
      return;
    }

    if (e.key === 'Enter') {
      currentTags.push(newTag)
      setTagValue('')
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

  useEffect(() => {
    const subscribe = watch((value: any, { name, type }: { name: string, type: string }) => {
      if (name === 'title') {
        const newSlug = value.title?.trim()
          .replaceAll(' ', '-')
          .replaceAll("'", '')
          .replaceAll("(", '')
          .replaceAll(")", '')
          .replaceAll(".", '')
          .toLowerCase() || ''
        setValue('slug', newSlug)
      }
    })
    return () => subscribe.unsubscribe();
  }, [watch])

  return (
    <Box>
      <Head>
        <title>Aneuswimwear | {product._id ? 'Update Product' : 'New Product'}</title>
      </Head>
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
              {product._id ? 'Update Product' : 'New Product'}
            </Text>
          </Flex>
          <Button
            isLoading={isLoading}
            onClick={handleSubmit(onSubmit)}
          >
            Guardar
          </Button>
        </Flex>
        <Grid templateColumns={`repeat(2, 1fr)`} gap='20px'>
          <Flex direction='column' rowGap='20px'>
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
            <FormControl isInvalid={errors.description}>
              <FormLabel>Description</FormLabel>
              <Textarea {...register('description', { required: 'description is required' })} type='text' focusBorderColor='none' />
              <FormErrorMessage>{errors?.description?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.inStock}>
              <FormLabel>Stock</FormLabel>
              <Input
                {...register('inStock',
                  {
                    required: 'stock is required',
                    min: { value: 0, message: 'stock must be 0 or greater than 1' }
                  })}
                type='number'
                focusBorderColor='none'
              />
              <FormErrorMessage>{errors?.inStock?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.price}>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <InputLeftAddon>
                  <BsCurrencyDollar />
                </InputLeftAddon>
                <Input
                  {...register('price',
                    {
                      required: 'price is required', min: { value: 0, message: 'stock must be 0 or greater than 1' }
                    })}
                  type='text'
                  focusBorderColor='none'
                />
              </InputGroup>
              <FormErrorMessage>{errors?.price?.message}</FormErrorMessage>
            </FormControl>
            <Box>
              <Text>Type</Text>
              <RadioGroup onChange={(value) => setValue('type', value, { shouldValidate: true })} defaultValue={getValues('type')} >
                <Stack spacing={[1, 5]} direction='row'>
                  <Radio value='top'>Top</Radio>
                  <Radio value='bottom'>Bottom</Radio>
                  <Radio value='one-pices'>One Pices</Radio>
                  <Radio value='hoodies'>Hoodies</Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Box>
              <Text>Gender</Text>
              <RadioGroup onChange={(value) => setValue('gender', value, { shouldValidate: true })} defaultValue={getValues('gender')} >
                <Stack spacing={[3, 5]} direction={'row'} wrap='wrap'>
                  <Radio value='men'>Men</Radio>
                  <Radio value='women'>Women</Radio>
                  <Radio value='kid'>Kid</Radio>
                  <Radio value='unisex'>Unisex</Radio>
                  <Radio value='best_sellers'>Best Sellers</Radio>
                  <Radio value='news'>News</Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Box>
              <Text>
                Sizes
              </Text>
              <CheckboxGroup colorScheme='green' onChange={(value) => setValue('sizes', value, { shouldValidate: true })} defaultValue={getValues('sizes')}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox value='XS'>XS</Checkbox>
                  <Checkbox value='S'>S</Checkbox>
                  <Checkbox value='M'>M</Checkbox>
                  <Checkbox value='L'>L</Checkbox>
                  <Checkbox value='XL'>XL</Checkbox>
                  <Checkbox value='XXL'>XXL</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
          </Flex>

          <Flex direction='column' rowGap='20px'>
            <FormControl isInvalid={errors.slug}>
              <FormLabel>Slug - URL</FormLabel>
              <Input
                focusBorderColor='none'
                {...register('slug', {
                  required: 'slug is required',
                  validate: (val: string) => val.trim().includes(' ') ? 'the slug cannot contain spaces' : undefined
                })}
                type='text'
              />
              <FormErrorMessage>{errors?.slug?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.tags}>
              <FormLabel>Tags</FormLabel>
              <Input
                type='text'
                focusBorderColor='none'
                placeholder="Add a tag and press Enter"
                onKeyDown={handleKeyDown}
                value={tagValue}
                onChange={(e) => setTagValue(e.target.value)}
              />
              {tags.length > 0 ? (
                <Flex
                  flexWrap='wrap'
                  padding='16px'
                  borderRadius='8px'
                  border='1px solid #e5e5e5'
                  gap='8px'
                  mb='4px'
                >
                  {
                    tags?.map((tag: string, i: number) => (
                      <Tag
                        key={i}
                        size='lg'
                        variant='outline'
                        colorScheme='green'
                      >
                        <TagLabel>{tag}</TagLabel>
                        <TagCloseButton onClick={() => removeSelectTags(i)} />
                      </Tag>
                    ))
                  }
                </Flex>
              ) : null}
              <FormErrorMessage>{errors?.tags?.message}</FormErrorMessage>
            </FormControl>
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
              {images.map((img: string, i: number) => (
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
        </Grid>
      </Box>
    </Box >
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = '' } = query as { slug: string }

  let product: IProduct | null

  if (slug === 'new') {
    const tempProduct = JSON.parse(JSON.stringify(new Product()))
    delete tempProduct._id
    product = tempProduct;
  } else {
    product = await dbProducts.getProductBySlug(slug)
  }

  if (!product) {
    return {
      redirect: {
        destination: '/admin/products',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    }
  }
}

export default ProductAdminPages