export interface Response<T> {
  status: number
  description: string
  jwt: string
  data: T[]
  success: boolean
}
