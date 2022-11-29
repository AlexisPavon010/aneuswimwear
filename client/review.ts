import axios from "axios"

export interface Review {
  comment: string;
  name: string;
  rating: number;
  id: string;
}

export const postReview = (payload: Review) => {
  return axios.post('/api/review', payload)
}
