import {requestLogin, Response, UserModel} from '@/model'
import axiosClient from './axiosClient'

const userApi = {
  postUser(request: requestLogin): Promise<Response<UserModel>> {
    const url = '/user/login'
    console.log(request)
    return axiosClient.post(url, request)
  },
}
export default userApi
