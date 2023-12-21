import axios from 'axios'

export const API_URL: string =  'http://localhost:31299/api'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

export default $api