import {formatCurrency} from '@/common'
import {addToCart} from '@/features/Cart/CartSlice'
import {Product, ProductVariant} from '@/model'
import CloseIcon from '@mui/icons-material/Close'
import {Avatar, AvatarGroup, Box, Tooltip, Typography} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import {styled} from '@mui/material/styles'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import FromBuy from '../FormBuy'
import './style.scss'

const BootstrapDialog = styled(Dialog)(({theme}) => ({
  '& .MuiDialogContent-root': {
    padding: '15px 20px',
    overflow: 'hidden', // Prevent scrollbars
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export interface IProductDialog {
  item: Product
  open: boolean
  handleClose: () => void
}

export default function ProductDialog({item, open, handleClose}: IProductDialog) {
  const productVariant = item.productVariants?.filter(
    (variant, index, self) => index === self.findIndex((v) => v.color === variant.color),
  )
  const [currentColor, setCurrentColor] = useState('')
  const [currentImage, setCurrentImage] = useState(item.productVariants?.[0].subImage?.[0])
  const handleChangeImage = (indexVariant: number, color: string) => {
    setCurrentImage(item.productVariants?.[indexVariant].subImage?.[0])
    setCurrentColor(color)
  }
  const [selectedSize, setSelectedSize] = useState(productVariant?.[0].size)

  const handleSizeClick = (size: string) => {
    setSelectedSize(size)
  }
  const dispatch = useDispatch()
  const handleCart = (values: {product_quantity: number}) => {
    console.log(values)
    const productVariantId = item.productVariants?.find(
      (variant) => variant.size === selectedSize && variant.color === currentColor,
    )?.productVariantID
    const action = addToCart({
      id: item.productID,
      productVariantId: productVariantId,
      product: item,
      quantity: values.product_quantity,
    })
    console.log(action)
    dispatch(action)
  }
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      open={open}
      maxWidth='lg'
    >
      <IconButton
        aria-label='close'
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{width: '950px', height: '550'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}} mt={1}>
          <Box className='dialog-content'>
            <Box>
              <a href='#!' className='dialog-link'>
                <img src={currentImage} alt='' />
              </a>
            </Box>
          </Box>
          <Box className='dialog-content'>
            <a href='#!' className='product-link'>
              <Typography
                component={'h3'}
                sx={{fontSize: '2.8rem', fontWeight: '500', lineHeight: '112%'}}
              >
                {item.name}
              </Typography>
            </a>
            <Typography fontSize={'1.4rem'} mt={2}>
              Mã sản phẩm:
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
              <Typography component={'span'} ml={1} sx={{fontSize: '1.4rem', color: 'red'}}>
                {item.discountPercentage ? `-${item.discountPercentage * 100}%` : null}
              </Typography>
            </Box>
            <Typography fontSize={'1.4rem'} mt={1}>
              Màu sắc:
            </Typography>
            <AvatarGroup sx={{gap: '16px', justifyContent: 'flex-end', mt: 2}}>
              {productVariant?.map((variant: ProductVariant, index: number) => (
                <Tooltip title={variant.color} key={index} arrow>
                  <Typography
                    className='product-img__ava'
                    component={'span'}
                    onClick={() => handleChangeImage(index, variant.color)}
                  >
                    <Avatar
                      alt={variant.color}
                      src={variant.subImage?.[0]}
                      sx={{width: '30px', height: '30px', cursor: 'pointer'}}
                    />
                  </Typography>
                </Tooltip>
              ))}
            </AvatarGroup>
            <Typography fontSize={'1.4rem'} mt={4}>
              Kích thước:
            </Typography>
            <Box sx={{display: 'flex', gap: '8px', mt: 1}}>
              {productVariant?.map((variant: ProductVariant) => (
                <Button
                  key={variant.size}
                  onClick={() => handleSizeClick(variant.size)}
                  size='small'
                  variant={selectedSize === variant.size ? 'contained' : 'outlined'}
                  sx={{
                    fontSize: '1.2rem',
                    background: selectedSize === variant.size ? 'black' : 'white',
                    color: selectedSize === variant.size ? 'white' : 'black',
                    '&:hover': {
                      background: selectedSize === variant.size ? 'black' : 'white',
                      color: selectedSize === variant.size ? 'white' : 'black',
                    },
                  }}
                  color='inherit'
                >
                  {variant.size}
                </Button>
              ))}
            </Box>
            <Box sx={{mt: '134px'}}>
              <FromBuy onSubmit={handleCart} />
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </BootstrapDialog>
  )
}
