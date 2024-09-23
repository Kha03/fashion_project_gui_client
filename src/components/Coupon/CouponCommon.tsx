import {Box, Button, Typography} from '@mui/material'
import * as React from 'react'

export interface ICouponCommonProps {}

export default function CouponCommon() {
  const [copySuccess, setCopySuccess] = React.useState('')

  const copyCodeToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('EGANY')
      setCopySuccess('Đã Chép')
      setTimeout(() => setCopySuccess(''), 5000)
    } catch (err) {
      setCopySuccess('Failed to copy!')
      setTimeout(() => setCopySuccess(''), 2000)
    }
  }
  return (
    <Box
      sx={{
        border: '2px dashed #002884',
        borderRadius: 5,
        padding: 1,
      }}
      component='fieldset'
    >
      <Typography
        component='legend'
        sx={{mb: 1, fontWeight: '700', fontSize: '1.6rem', color: '#002884'}}
      >
        KHUYẾN MÃI - ƯU ĐÃI
      </Typography>
      <Box component='ul' sx={{m: 0, listStyleType: 'initial', pl: 4}}>
        <Typography component='li' sx={{mb: 1.5, fontSize: '1.3rem'}}>
          Nhập mã <strong style={{fontSize: '1.4rem'}}>EGANY </strong>thêm 5% đơn hàng
          <Button onClick={copyCodeToClipboard} size='small' sx={{ml: 1}}>
            {copySuccess || 'Sao Chép'}
          </Button>
        </Typography>
        {[
          'Hỗ trợ 10.000đ phí Ship cho đơn hàng từ 200.000đ',
          'Miễn phí Ship cho đơn hàng từ 300.000đ',
          'Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì',
        ].map((item, index) => (
          <Typography component='li' key={index} sx={{mb: 1.5, fontSize: '1.3rem'}}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}
