import {Box, Typography} from '@mui/material'
import * as React from 'react'

export interface ICodeCouponProps {
  code: string
}

export default function CodeCoupon({code}: ICodeCouponProps) {
  return (
    <Box overflow={'hidden'} width={'92px'} mr={1}>
      <Box
        sx={{
          border: '1px solid #3a6fb5',
          borderRadius: '5px',
          position: 'relative',
          padding: '3px 12px',
          ':before': {
            content: '""',
            position: 'absolute',
            background: '#fff',
            display: 'block',
            width: '10px',
            height: '10px',
            border: '1px solid #3a6fb5',
            borderRadius: '999px',
            top: '50%',
            left: '-5px',
            transform: 'translateY(-50%)',
          },
          ':after': {
            content: '""',
            position: 'absolute',
            background: '#fff',
            display: 'block',
            width: '10px',
            height: '10px',
            border: '1px solid #3a6fb5',
            borderRadius: '999px',
            top: '50%',
            right: '-5px',
            transform: 'translateY(-50%)',
          },
        }}
      >
        <Typography color={'#3a6fb5'} fontSize={'1.2rem'} textAlign={'center'}>
          {code}
        </Typography>
      </Box>
    </Box>
  )
}
