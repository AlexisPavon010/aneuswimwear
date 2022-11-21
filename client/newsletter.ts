import axios from 'axios'

interface Payload {
  description: string;
  firstTitle: string;
  image: string[];
  secondTitle: string;
  subtitle: string;
  _id:string;
}

export const uploadNewsletter = (payload: Payload) => {
  return axios.post('/api/admin/newsletter', payload)
}
