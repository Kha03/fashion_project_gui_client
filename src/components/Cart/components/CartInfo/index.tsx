import {formatCurrency} from '@/common'
import CopuonDrawer from '@/components/Coupon/CouponDrawer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import DiscountIcon from '@mui/icons-material/Discount'
import {Box, Button, Stack, Typography} from '@mui/material'
import * as React from 'react'
export interface ICartInfoProps {
  count?: number
  total?: number
}

export default function CartInfo({total, count}: ICartInfoProps) {
  const [OpenDrawer, setOpenDrawer] = React.useState(false)
  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open)
  }

  return (
    <Stack p={3} spacing={3}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Typography variant='h5'>Thông tin đơn hàng</Typography>
        <Typography variant='h6' fontWeight={600}>
          {count ? count : 'chưa có'} sản phẩm
        </Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Typography variant='h4'>Tổng Cộng:</Typography>
        <Typography variant='h4' fontWeight={600}>
          {formatCurrency(total ? total : 0)}
        </Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Typography sx={{fontSize: '1.4rem', display: 'flex', alignItems: 'center'}}>
          <DiscountIcon sx={{color: '#2E72D2', mr: 1}} />
          Mã giảm giá
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            color: '#2E72D2',
          }}
          onClick={() => {
            toggleDrawer(true)
          }}
        >
          Chọn mã giảm giá <ArrowForwardIosIcon sx={{marginLeft: '0.5rem'}} />
        </Typography>
      </Box>

      <Button fullWidth sx={{p: 1, fontSize: '1.4rem'}} variant='contained'>
        Thanh Toán
      </Button>
      <CopuonDrawer open={OpenDrawer} onClose={() => toggleDrawer(false)} />
    </Stack>
  )
}
