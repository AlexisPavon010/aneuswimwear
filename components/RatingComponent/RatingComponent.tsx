import { SimpleGrid, Alert, Flex, AlertDescription, Spinner, FormControl, Textarea, FormErrorMessage, Button, Box, Text } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup";
import ReactStars from "react-rating-stars-component";
import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form";
import { useState } from "react";
import moment from "moment"
import * as yup from 'yup'

import { IProduct, IReview } from "../../interfaces"
import { postReview } from '../../client';

const schema = yup.object({
  comment: yup.string().min(6).required(),
})

export const RatingComponent = ({ product }: { product: IProduct }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)
  const [alredyReviewed, setAlredyReviewed] = useState(false)
  const { register, handleSubmit, setValue, formState: { errors } }: any = useForm({
    resolver: yupResolver(schema)
  });

  const { data: session }: any = useSession()

  const sendPostReview = async (formData: any) => {
    setIsLoading(true)
    try {
      const { data } = await postReview({
        comment: formData.comment,
        id: product._id,
        name: session.user.name,
        rating: selectedRating
      })
      setValue('comment', '')
    } catch (error) {
      console.log(error)
      setAlredyReviewed(true)
      setValue('comment', '')
    } finally {
      setIsLoading(false)
    }
  }

  const ratingChanged = (newRating: number) => {
    setSelectedRating(newRating)
  };

  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
    >
      <Box p={{ base: 2, md: 4 }}>
        <Text
          fontWeight={600}
          mb='20px'
        >
          REVIEWS
        </Text>
        {!product?.reviews || product?.reviews?.length === 0 ? (
          <Alert status='info'>
            There are no reviews on this product!
          </Alert>
        ) : product?.reviews?.map(({ _id, comment, createdAt, name, rating, }: IReview) => (
          <Box
            bgColor='#f8f9fa'
            borderRadius={4}
            key={_id}
            mb={4}
            p={4}
          >
            <Flex justifyContent='space-between'>
              <Text>
                {name}
              </Text>
              <Text>
                {moment(createdAt).calendar()}
              </Text>
            </Flex>
            <ReactStars
              value={rating}
              edit={false}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <Alert status='success'>
              <AlertDescription>
                {comment}
              </AlertDescription>
            </Alert>
          </Box>
        ))}
      </Box>
      <Box>
        <Box p={{ base: 2, md: 4 }}>
          <Text
            fontWeight={600}
            mb='20px'
          >
            WRITE A CUSTOMER REVIEW
          </Text>
          {isLoading && (
            <Flex justify='center' align='center'>
              <Spinner />
            </Flex>
          )}
          {alredyReviewed && (
            <Alert status='error'>
              You have already written a review on this product
            </Alert>
          )}
          {session ? (
            <>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              <Text
                mb='8px'
              >
                Comment
              </Text>
              <FormControl isInvalid={!!errors.comment}>
                <Textarea mb='8px' {...register("comment")} />
                <FormErrorMessage>{errors?.comment?.message}</FormErrorMessage>
              </FormControl>
              <Button
                size='lg'
                onClick={handleSubmit(sendPostReview)}
                width='100%'
              >
                Submit
              </Button>
            </>
          ) : (
            <Alert status='warning'>
              You must be logged in to write a review
            </Alert>
          )}
        </Box>
      </Box>
    </SimpleGrid >
  )
}