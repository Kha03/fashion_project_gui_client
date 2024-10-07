import {Facebook, Instagram, YouTube} from '@mui/icons-material'
import {Box, Button, Container, Grid2, Link, TextField, Typography} from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{bgcolor: '#0d276b', color: 'white', p: 4, mt: 5}}>
      <Container maxWidth='lg'>
        <Grid2 container spacing={4}>
          <Grid2 size={{xs: 6, md: 4}}>
            <Typography variant='h6' sx={{fontSize: '1.8rem'}}>
              EGA SPORTSWEAR
            </Typography>
            <Typography sx={{fontSize: '1.4rem'}}>
              Địa chỉ: 70 Lu Gia, District 11, Ho Chi Minh City
            </Typography>
            <Typography sx={{fontSize: '1.4rem'}}>Số điện thoại: 190006750</Typography>
            <Typography sx={{fontSize: '1.4rem'}}>Email: support@sapo.vn</Typography>
            <Typography variant='body2' sx={{mt: 2}}>
              © Bản quyền thuộc về EGANY | Cung cấp bởi Sapo
            </Typography>
          </Grid2>
          <Grid2 size={{xs: 6, md: 4}}>
            <Typography variant='h6'>HỖ TRỢ KHÁCH HÀNG</Typography>
            <Link href='#' color='inherit' underline='hover'>
              Tìm kiếm
            </Link>
            <br />
            <Link href='#' color='inherit' underline='hover'>
              Giới thiệu
            </Link>
            <br />
            <Link href='#' color='inherit' underline='hover'>
              Liên hệ
            </Link>
            <br />
            <Link href='#' color='inherit' underline='hover'>
              Cửa hàng
            </Link>
          </Grid2>
          <Grid2 size={{xs: 6, md: 4}}>
            <Typography variant='h6'>CHÍNH SÁCH</Typography>
            <Link href='#' color='inherit' underline='hover'>
              Điều khoản dịch vụ
            </Link>
            <br />
            <Link href='#' color='inherit' underline='hover'>
              Chính sách bảo mật
            </Link>
            <br />
            <Link href='#' color='inherit' underline='hover'>
              Chính sách đổi trả
            </Link>
            <br />
            <Link href='#' color='inherit' underline='hover'>
              Câu hỏi thường gặp
            </Link>
          </Grid2>
        </Grid2>
        <Box sx={{mt: 4}}>
          <Typography variant='h6'>ĐĂNG KÝ NHẬN TIN</Typography>
          <Typography sx={{mb: 2}}>Bạn muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.</Typography>
          <Grid2 container spacing={2} alignItems={'center'}>
            <Grid2 size={8}>
              <TextField
                fullWidth
                variant='outlined'
                placeholder='Nhập địa chỉ email'
                sx={{bgcolor: 'white', borderRadius: 1}}
                slotProps={{
                  input: {
                    sx: {fontSize: '1.6rem'},
                  },
                }}
              />
            </Grid2>
            <Grid2 size={4}>
              <Button variant='contained' sx={{bgcolor: '#007BFF', color: 'white'}}>
                Đăng ký
              </Button>
            </Grid2>
          </Grid2>
          <Box sx={{mt: 2}}>
            <Typography variant='body2' color='white' sx={{fontSize: '1.4rem'}}>
              Kết nối với chúng tôi:
            </Typography>
            <Box sx={{display: 'flex', mt: 1}}>
              <Link href='#' color='inherit' sx={{mr: 2}}>
                <Facebook sx={{'&:hover': {color: '#3b5998'}}} fontSize='large' />
              </Link>
              <Link href='#' color='inherit' sx={{mr: 2}}>
                <Instagram sx={{'&:hover': {color: '#E1306C'}}} fontSize='large' />
              </Link>
              <Link href='#' color='inherit' sx={{mr: 2}}>
                <YouTube sx={{'&:hover': {color: '#FF0000'}}} fontSize='large' />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
