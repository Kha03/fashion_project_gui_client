import {formatCurrency} from '@/common'
import {removeFromCart, setQuantity} from '@/features/Cart/CartSlice'
import type {CartItem} from '@/model'
import {Add, Remove} from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import {Box, IconButton, Stack, TextField, Typography} from '@mui/material'
import * as React from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

export interface ICartItemProps {
  item: CartItem
  handleToast?: () => void
}

export default function CartItem({item, handleToast}: ICartItemProps) {
  const [value, setValue] = React.useState(item.quantity)
  const productVariant = item.product.productVariants?.find(
    (variant) => variant.productVariantID === item.productVariantId,
  )
  const dispatch = useDispatch()
  const handleQuantityChange = (idProduct: number, quantity: number) => {
    const action = setQuantity({id: idProduct, quantity: quantity})
    dispatch(action)
  }
  const handleRemove = (idProduct: number) => {
    const action = removeFromCart(idProduct)
    dispatch(action)
    handleToast && handleToast()
  }
  const handleIncrement = (id: number) => {
    setValue((prev) => {
      const newValue = prev + 1
      handleQuantityChange(id, newValue)
      return newValue
    })
  }

  const handleDecrement = (id: number) => {
    setValue((prev) => {
      const newValue = prev - 1
      handleQuantityChange(id, newValue)
      return newValue
    })
  }

  return (
    <Box>
      <Stack direction='row' spacing={2} alignItems={'center'}>
        <Box sx={{padding: '7px', cursor: 'pointer'}} onClick={() => handleRemove(item.id)}>
          <CloseIcon />
        </Box>
        <Box sx={{width: 100, height: 100, paddingX: '12px'}}>
          <Link to='/'>
            <img
              src={productVariant?.subImage?.[0] || item.product.image}
              style={{width: '100%', height: 'auto', objectFit: 'cover'}}
            />
          </Link>
        </Box>
        <Stack
          direction={'row'}
          alignItems={'center'}
          width={'100%'}
          justifyContent={'space-between'}
        >
          <Box>
            <Link to='/'>
              <Typography
                sx={{
                  fontSize: '1.4rem',
                  maxWidth: '260px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.product.name}
              </Typography>
            </Link>
            <Typography mt={2} sx={{fontSize: '1.2rem', color: '#898989'}}>
              {productVariant?.size}
            </Typography>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Box>
              <Typography mr={3} sx={{fontSize: '1.4rem', fontWeight: 500}}>
                {formatCurrency(item.product.discountedPrice || item.product.originalPrice)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #666',
                padding: '5px',
                borderRadius: '10px',
              }}
            >
              <IconButton
                onClick={() => handleDecrement(item.id)}
                disabled={value <= 1}
                sx={{p: 0}}
              >
                <Remove />
              </IconButton>
              <TextField
                value={value}
                size='small'
                inputMode='numeric'
                sx={{
                  width: '50px',
                  textAlign: 'center',
                  '& .MuiInputBase-input': {fontSize: '1.2rem', color: '#000'},
                }}
                variant='standard'
                margin='none'
                slotProps={{
                  input: {
                    readOnly: true,
                    inputProps: {style: {textAlign: 'center'}},
                    disableUnderline: true,
                  },
                }}
              />

              <IconButton onClick={() => handleIncrement(item.id)} sx={{p: 0}}>
                <Add />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}
