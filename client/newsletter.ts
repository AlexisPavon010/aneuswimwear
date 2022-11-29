import axios from 'axios'

interface Payload {
  description: string;
  firstTitle: string;
  image: string[];
  secondTitle: string;
  subtitle: string;
  _id: string;
}

export const uploadNewsletter = (payload: Payload) => {
  return axios.post('/api/admin/newsletter', payload)
}

export const sendNewsletterEmail = (email: string) => {
  return axios.post('/api/email/newsletter', {
    email
  })
}
