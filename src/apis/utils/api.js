import axios from 'axios'

// get, delete 등 인증이 필요하지 않은 경우
const axiosApi = () => {
  const instance = axios.create({baseURL: '/api/', withCredentials: true})
  return instance;
}

// post, patch 등 인증이 필요한 경우
const axiosAuthApi = () => {
  const token = localStorage.getItem('login-token')

  const instance =  axios.create({
    baseURL: '/api/',
    headers: {Authorization: 'Bearer ' + token},
    withCredentials: true
  })
  return instance
}

export const defaultInstance = axiosApi();
export const authInstance = axiosAuthApi();