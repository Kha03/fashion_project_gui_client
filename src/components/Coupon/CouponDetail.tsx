import * as React from 'react'
import {CouponItem} from './CouponItem'
import {Box, Typography} from '@mui/material'

export interface ICouponDetailProps {
  item: CouponItem
}

export function CouponDetail({item}: ICouponDetailProps) {
  return (
    <Box className='coupon-detail'>
      <Box sx={{background: '#3a6fb5', padding: '5px 10px', textAlign: 'center'}}>
        <Typography component={'h4'} fontSize={'1.8rem'}>
          {item.title}
        </Typography>
      </Box>
      <Box padding={'10px'}>
        <Box>
          <Typography fontSize={'1.6rem'} component={'p'}>
            Mã:{item.id}
          </Typography>
        </Box>
        <Box>
          <Typography fontSize={'1.6rem'} component={'p'}>
            HSD:{item.expiry}
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography fontSize={'1.4rem'} component={'p'}>
            {item.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
