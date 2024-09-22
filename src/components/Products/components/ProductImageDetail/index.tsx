import {Box} from '@mui/material'
import * as React from 'react'

export interface IProductImageDetailProps {
  url: string
}

export default function ProductImageDetail({url}: IProductImageDetailProps) {
  return (
    <Box width={'450px'} height={'600px'}>
      <img
        src={url}
        alt=''
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
        draggable={false}
      />
    </Box>
  )
}
