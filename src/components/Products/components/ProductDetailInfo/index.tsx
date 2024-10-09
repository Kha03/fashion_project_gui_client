import {formatCurrency} from '@/common'
import CouponCommon from '@/components/Coupon/CouponCommon'
import {addToCart} from '@/features/Cart/CartSlice'
import {Product} from '@/model'
import {
  Alert,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Link,
  Snackbar,
  SnackbarCloseReason,
  Tooltip,
  Typography,
} from '@mui/material'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import FromBuy from '../FormBuy'
import CodeCouponGroup from './CodeCouponGroup'

export interface IProductDetailInfoProps {
  item: Product
  onChangeImg?: (img: string, index: number) => void
  subImgColor?: {color: string; subImage: string; size: string; index: number}[]
}

export default function ProductDetailInfo({
  item,
  subImgColor,
  onChangeImg,
}: IProductDetailInfoProps) {
  const [currentColor, setCurrentColor] = useState('')
  const [selectedSize, setSelectedSize] = useState(subImgColor?.[0].size)
  //state snackbar remove cart
  const [open, setOpen] = useState(false)

  const handleOpenSnack = () => {
    setOpen(true)
  }

  const handleCloseSnack = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  const handleSizeClick = (size: string) => {
    setSelectedSize(size)
  }
  const handleChangeImage = (index: number, color: string, colorName: string) => {
    setCurrentColor(colorName)
    onChangeImg && onChangeImg(color, index)
  }
  const dispatch = useDispatch()

  const handleCart = (values: {product_quantity: number}) => {
    const productVariantId = item.productVariants?.find(
      (variant) => variant.size === selectedSize && variant.color === currentColor,
    )?.productVariantID
    const action = addToCart({
      id: item.productID,
      productVariantId: productVariantId,
      product: item,
      quantity: values.product_quantity,
    })
    dispatch(action)
    handleOpenSnack()
  }
  return (
    <Box ml={5} padding={3}>
      <Typography component={'h3'} sx={{fontSize: '2.8rem', fontWeight: '500', lineHeight: '112%'}}>
        {item.name}
      </Typography>
      <Typography fontSize={'1.4rem'} mt={2}>
        Mã Sản Phẩm:
        <Typography component={'span'} color={'#2f80ed'} fontSize={'1.4rem'} ml={1}>
          {item.productID}
        </Typography>
      </Typography>
      <Box sx={{display: 'flex', alignItems: 'baseline', mt: '8px', cursor: 'default'}}>
        <Typography component={'span'} sx={{fontSize: '2.2rem'}}>
          {formatCurrency(item.discountedPrice ? item.discountedPrice : item.originalPrice)}
        </Typography>
        <Typography
          component={'span'}
          ml={1}
          sx={{fontSize: '1.4rem', color: '#666', textDecoration: 'line-through'}}
        >
          {item.discountedPrice ? formatCurrency(item.originalPrice) : null}
        </Typography>
        <Typography component={'span'} ml={1} sx={{fontSize: '1.4rem', color: '#f44336'}}>
          {item.discountPercentage ? `-${item.discountPercentage * 100}%` : null}
        </Typography>
      </Box>
      <Typography fontSize={'1.4rem'} mt={1} color={'#757575'}>
        {item.discountedPrice
          ? `Tiết Kiệm ${formatCurrency(item.originalPrice - item.discountedPrice)}`
          : null}
      </Typography>
      <Box mt={2}>
        <CouponCommon />
      </Box>
      <Box mt={2}>
        <CodeCouponGroup codes={['ABC123', 'DEF456', 'GHI789']} />
      </Box>
      <Box>
        {subImgColor && (
          <>
            <Box mt={2}>
              <Typography fontSize={'1.6rem'}>Màu Sắc: {currentColor}</Typography>
              <AvatarGroup sx={{gap: '16px', justifyContent: 'flex-end', mt: 2}}>
                {subImgColor.map((variant) => (
                  <Tooltip title={variant.color} key={variant.index} arrow>
                    <Typography
                      sx={{
                        '&:hover': {
                          opacity: 0.8,
                        },
                      }}
                      component={'span'}
                      onClick={() =>
                        handleChangeImage(variant.index, variant.subImage, variant.color)
                      }
                    >
                      <Avatar
                        alt={variant.color}
                        src={variant.subImage}
                        sx={{width: '30px', height: '30px', cursor: 'pointer'}}
                      />
                    </Typography>
                  </Tooltip>
                ))}
              </AvatarGroup>
            </Box>
            <Box mt={2}>
              <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography fontSize={'1.6rem'}>Kích Thước: {selectedSize}</Typography>
                <Link href='#' underline='always' color='#3a6fb5'>
                  Hướng dẫn chọn size
                </Link>
              </Box>
              <Box sx={{display: 'flex', gap: '8px', mt: 2}}>
                {subImgColor?.map((variant) => (
                  <Button
                    key={variant.size}
                    onClick={() => handleSizeClick(variant.size)}
                    size='small'
                    variant={selectedSize === variant.size ? 'contained' : 'outlined'}
                    sx={{
                      fontSize: '1.2rem',
                    }}
                    color='primary'
                  >
                    {variant.size}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box mt={3}>
              <FromBuy onSubmit={handleCart} />
            </Box>
          </>
        )}
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={handleCloseSnack}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      >
        <Alert
          onClose={handleCloseSnack}
          severity='success'
          variant='standard'
          sx={{width: '100%', fontSize: '1.2rem'}}
        >
          Đã thêm vào giỏ hàng
        </Alert>
      </Snackbar>
    </Box>
  )
}
