import axios from 'axios'

import { IOrder } from '../interfaces'

export const createOrder = (payload: IOrder) => {
  return axios.post(`/api/order`, payload)
}
