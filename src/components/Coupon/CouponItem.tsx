import {Box, Button, Typography} from '@mui/material'
import {PATH_IMG_SLIDER} from '../../common/PathImg'
import InfoIcon from '@mui/icons-material/Info'
import './style.scss'
import {CouponDetail} from './CouponDetail'
import {useState} from 'react'

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
  const [copySuccess, setCopySuccess] = useState('')
  const copyCodeToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopySuccess('Đã Chép')
      setTimeout(() => setCopySuccess(''), 5000)
    } catch (err) {
      setCopySuccess('Failed to copy!')
      setTimeout(() => setCopySuccess(''), 2000)
    }
  }
  return (
    <Box className='coupon-item' sx={{display: 'flex', height: '100%'}}>
      <Box className='coupon-item__left' sx={{width: '20%'}}>
        <Box width='100%'>
          <img
            className='coupon-item__icon'
            src={`${PATH_IMG_SLIDER}coupon_${index + 1}.png`}
            alt=''
          />
        </Box>
      </Box>

      <Box className='coupon-item__right' sx={{width: '80%', padding: '8px'}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography sx={{fontSize: '1.6rem'}} component={'h4'}>
            {item.title}
          </Typography>
          <Typography sx={{fontSize: '1.2rem', opacity: 0.8}} component={'span'}>
            {item.description}
          </Typography>
          <Box className='coupon-item__info' sx={{marginTop: '8px'}}>
            <InfoIcon fontSize='large' sx={{color: '#3a6fb5'}} />
            <CouponDetail item={item} />
          </Box>

          <Typography sx={{fontSize: '1.2rem', mt: 1, opacity: 0.8}} component={'span'}>
            Mã: {item.id}
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              mt: 1,
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{fontSize: '1.2rem'}} component={'span'}>
              HSD: {item.expiry}
            </Typography>
            <Button
              sx={{
                background: '#3a6fb5',
                color: '#fff',
                padding: '3px 8px',

                ':hover': {
                  backgroundColor: 'primary.main',
                },
              }}
              onClick={() => copyCodeToClipboard(item.id)}
            >
              {copySuccess || 'Sao Chép'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
