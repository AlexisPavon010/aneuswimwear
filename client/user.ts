import axios from 'axios'

export const registerUser = (email: string, password: string, name: string) => {
  return axios.post('/api/user/register', {
    name,
    email,
    password
  })
}

export const updateUser = (role: string, id: string) => {
  return axios.put('/api/admin/users', {
    role,
    id
  })
}

export const recoveryPassword = (email: string) => {
  return axios.post('/api/email/recovery-password', {
    email
  })
}

export const resetPassword = (password: string, token: string) => {
  return axios.post('/api/email/reset-password', {
    password,
    token
  })
}