import {Box, Typography} from '@mui/material'
import {PATH_IMG_SLIDER} from '../../common/PathImg'
import InfoIcon from '@mui/icons-material/Info'
import './style.scss'
import {CouponDetail} from './CouponDetail'

export interface ICouponItemProps {
  item: CouponItem
  index: number
}

export interface CouponItem {
  id: string
  title: string
  description: string
  expiry?: string
}

export function CouponItem({item, index}: ICouponItemProps) {
  return (
    <Box className='coupon-item' sx={{display: 'flex', height: '100%'}}>
      <Box className='coupon-item__left'>
        <Box width='80%'>
          <img
            className='coupon-item__icon'
            src={`${PATH_IMG_SLIDER}coupon_${index + 1}.png`}
            alt=''
          />
        </Box>
      </Box>
      <Box className='coupon-item__right'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '10px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              position: 'relative',
            }}
          >
            <Typography sx={{fontSize: '1.6rem'}} component={'h4'}>
              {item.title}
            </Typography>
            <Typography sx={{fontSize: '1.2rem', opacity: 0.8}} component={'span'}>
              {item.description}
            </Typography>
            <Box className='coupon-item__info'>
              <InfoIcon fontSize='large' sx={{color: '#3a6fb5'}} />
              <CouponDetail item={item} />
            </Box>
          </Box>
          <Typography sx={{fontSize: '1.2rem', mt: 2, opacity: 0.8}} component={'span'}>
            Mã: {item.id}
          </Typography>
          <Typography sx={{fontSize: '1.4rem'}} component={'span'}>
            HSD: {item.expiry}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
