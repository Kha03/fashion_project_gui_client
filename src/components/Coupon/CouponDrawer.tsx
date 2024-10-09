import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import {Box, Button, Divider, Drawer, Typography} from '@mui/material'
import {CouponItem} from './CouponItem'

export interface ICopuonDrawerProps {
  open: boolean
  onClose: () => void
  codes?: object[]
}

export default function CopuonDrawer({open, onClose}: ICopuonDrawerProps) {
  const couponList = [
    {
      id: '123456',
      title: 'FREE SHIP',
      description: 'Áp dụng cho tất cả sản phẩm',
      expiry: '31/12/2021',
    },
    {
      id: '654321',
      title: 'Giảm 20%',
      description: 'Áp dụng cho tất cả sản phẩm',
      expiry: '31/12/2021',
    },
    {
      id: '456789',
      title: 'Giảm 30%',
      description: 'Áp dụng cho tất cả sản phẩm',
      expiry: '31/12/2021',
    },
    {
      id: '987654',
      title: 'Giảm 40%',
      description: 'Áp dụng cho tất cả sản phẩm',
      expiry: '31/12/2021',
    },
    {
      id: '987655',
      title: 'Giảm 40%',
      description: 'Áp dụng cho tất cả sản phẩm',
      expiry: '31/12/2021',
    },

    {
      id: '987657',
      title: 'Giảm 40%',
      description: 'Áp dụng cho tất cả sản phẩm',
      expiry: '31/12/2021',
    },
  ]
  return (
    <Drawer anchor={'right'} open={open} onClose={onClose}>
      <Box sx={{width: 400, padding: 2}}>
        <Box display={'flex'} alignItems={'center'}>
          <Button onClick={onClose}>
            <KeyboardArrowLeftIcon fontSize='large' />
          </Button>
          <Typography fontSize={'1.8rem'} width={'100%'} textAlign={'center'}>
            Mã giảm giá
          </Typography>
        </Box>{' '}
        <Divider />
        <Box
          mt={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            height: '100%',
          }}
        >
          {couponList.map((item, index) => (
            <Box key={item.id}>
              <CouponItem item={item} index={index} />
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  )
}
