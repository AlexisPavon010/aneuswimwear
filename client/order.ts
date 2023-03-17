import axios from 'axios'

import { IOrder } from '../interfaces'

export const createOrder = (payload: IOrder) => {
  return axios.post(`/api/order`, payload)
}

export const confirmOrder = (payload: any) => {
  return axios.post(`/api/order/pay`, payload)
}

export const successOrder = (payload: IOrder) => {
  return axios.post(`/api/email/success`, payload)
}