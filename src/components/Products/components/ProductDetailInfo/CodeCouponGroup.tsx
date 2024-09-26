import CodeCoupon from '@/components/Coupon/CodeCoupon'
import CopuonDrawer from '@/components/Coupon/CouponDrawer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {Box, Typography} from '@mui/material'
import {useState} from 'react'

export interface ICodeCouponGroupProps {
  codes?: string[]
}

export default function CodeCouponGroup({codes}: ICodeCouponGroupProps) {
  const [OpenDrawer, setOpenDrawer] = useState(false)
  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open)
  }
  return (
    <Box>
      <Typography fontSize={'1.4rem'}>Mã Giảm Giá</Typography>
      <Box
        mt={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          ':hover svg': {
            transform: 'translateX(5px)',
          },
        }}
        onClick={() => toggleDrawer(true)}
      >
        {(codes || []).map((code, index) => (
          <CodeCoupon key={index} code={code} />
        ))}
        <ArrowForwardIosIcon
          fontSize={'small'}
          sx={{
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>
      <CopuonDrawer open={OpenDrawer} onClose={() => toggleDrawer(false)} />
    </Box>
  )
}
