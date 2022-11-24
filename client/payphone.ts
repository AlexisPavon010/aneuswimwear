import axios from "axios"

export const Payphone = (payload: any) => {
  const token = process.env.NEXT_PUBLIC_PAYPHONE_TOKEN
  return axios.post('https://pay.payphonetodoesposible.com/api/button/Prepare', payload, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}
