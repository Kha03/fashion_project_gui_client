import {Box, Container, Grid} from '@mui/material'
import {CouponItem} from './CouponItem'

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
]
export default function Coupon() {
  return (
    <Box mt={9}>
      <Container>
        <Grid container spacing={1} justifyContent='space-between'>
          {couponList.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} lg={3} key={item.title}>
              <CouponItem item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
