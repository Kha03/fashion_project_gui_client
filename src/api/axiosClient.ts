import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios'

// Create an Axios instance
const axiosClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // Do something before request is sent
    // For example, you can add authentication tokens here
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lies within the range of 2xx cause this function to trigger
    // Do something with response data
    // Return only the data portion of the response
    return response.data
  },
  function (error) {
    // Any status code that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default axiosClient
