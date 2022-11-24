import axios from "axios"

export const Payphone = (payload: any) => {
  const token = process.env.PAYPHONE_TOKEN || ''
  console.log(token)
  return axios.post('https://pay.payphonetodoesposible.com/api/button/Prepare', payload, {
    headers: {
      'Authorization': `Bearer ${'y5P4pD8YNWjMRtVjCAi6vW7E_VOstbf_aCyzq6lrun3SVQbLAjp0d_p8BNnoWS1R5GLBX0OHvVQdZfJ_uk2Jyd_MWeWXYWx5LM-T40FThmvCIlT2wTnH_gDBPqy-dcQnRxnun5yLaw4BO-gtMm-UUVRLncj6imIRo6NiBshcSLvr9Vikz5nOFjpxN0jfMcKDmAuTcFzAAoxNwns4O-8wOmCEj0qpFxyX2GXeXYlaeMT_hvU75taZcN0835GlaRCZpITTVcBk4WcMV8HzFTQ205Y_vnHQpvwJag4HEeOU4LFaIx20SU3sx6Swjf4jWhhG_MSQeQ'}`
    }
  })
}
