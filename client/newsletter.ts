import axios from 'axios'

export const sendNewsletterEmail = (email: string) => {
  return axios.post('/api/email/newsletter', {
    email
  })
}
