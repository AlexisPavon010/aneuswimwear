import axios from "axios"

interface Payload {
  title: string;
  subtitle: string;
  images: string[];
}

export const uploadBanner = (payload: Payload) => {
  return axios.post('/api/admin/banner', payload)
}
