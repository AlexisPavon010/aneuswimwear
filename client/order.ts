import axios from 'axios'

import { IOrder } from '../interfaces'

export const createOrder = (payload: IOrder) => {
  return axios.post(`/api/order`, payload)
}

export const successOrder = (payload: IOrder) => {
  return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/email/success`, payload)
}