import axios from "axios"

import { IProduct } from "../interfaces/Product"

export const updateProduct = (payload: IProduct) => {
  return axios.put('/api/admin/products', payload)
}

export const createProduct = (payload: IProduct) => {
  return axios.post('/api/admin/products', payload)
}

export const uploadFiles = (files: FormData) => {
  return axios.post('/api/admin/upload', files)
}

export const deleteFiles = (id: string) => {
  return axios.delete(`/api/admin/upload?id=${id}`,)
}
