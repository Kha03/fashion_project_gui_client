import {Box} from '@mui/material'
import {useEffect} from 'react'

export interface IProductDetailProps {
  idProduct: string
}

export default function ProductDetail({idProduct}: IProductDetailProps) {
  useEffect(() => {
    console.log(idProduct)
  }, [idProduct])
  return <Box></Box>
}
