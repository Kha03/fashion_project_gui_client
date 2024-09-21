import {formatCurrency} from '@/common'
import {Product, ProductVariant} from '@/model'
import {Avatar, AvatarGroup, Box, Tooltip, Typography} from '@mui/material'
import {useState} from 'react'
import './style.scss'
import ProductDialog from '../ProductDialog'

export interface IProductItemProps {
  item: Product
}

export default function ProductItem({item, size}: IProductItemProps & {size?: string}) {
  const productVariant = item.productVariants?.filter(
    (variant, index, self) => index === self.findIndex((v) => v.color === variant.color),
  )
  const [currentImage, setCurrentImage] = useState(item.productVariants?.[0].subImage?.[0])

  const handleChangeImage = (indexVariant: number) => {
    setCurrentImage(item.productVariants?.[indexVariant].subImage?.[0])
  }
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const dimensions =
    size === 'small' ? {width: '200px', height: '300px'} : {width: '277px', height: '367px'}
  const sizeBox = size === 'small' ? {width: '240px'} : {width: '308px'}
  return (
    <Box width={sizeBox} padding={'0 15px'} margin={'18px 0'}>
      <a href='#!'>
        <Box className='product-img__container' width={dimensions.width} height={dimensions.height}>
          <img src={currentImage} alt='' className='product-img product-img__main' />
          <img src={item.image} alt='' className='product-img product-img__sub' />
        </Box>
      </a>
      <Box pt={2}>
        <Box>
          <a href='#!' className='product-link'>
            <Typography
              component={'h3'}
              sx={{fontSize: '1.8rem', fontWeight: '500', lineHeight: '112%'}}
            >
              {item.name}
            </Typography>
          </a>
          <Box sx={{display: 'flex', alignItems: 'baseline', mt: '8px', cursor: 'default'}}>
            <Typography component={'span'} sx={{fontSize: '1.5rem'}}>
              {formatCurrency(item.discountedPrice ? item.discountedPrice : item.originalPrice)}
            </Typography>
            <Typography
              component={'span'}
              ml={1}
              sx={{fontSize: '1.2rem', color: '#666', textDecoration: 'line-through'}}
            >
              {item.discountedPrice ? formatCurrency(item.originalPrice) : null}
            </Typography>
            <Typography component={'span'} ml={1} sx={{fontSize: '1.2rem', color: 'red'}}>
              {item.discountPercentage ? `-${item.discountPercentage * 100}%` : null}
            </Typography>
          </Box>
          <Box>
            <AvatarGroup
              max={3}
              sx={{gap: '4px', justifyContent: 'flex-end', mt: 2}}
              renderSurplus={(surplus) => (
                <Tooltip title={`${surplus.toString()[0]} sản phẩm khác`} arrow>
                  <Typography component={'span'} sx={{cursor: 'pointer'}} onClick={handleClickOpen}>
                    +{surplus.toString()[0]}
                  </Typography>
                </Tooltip>
              )}
            >
              {productVariant?.map((variant: ProductVariant, index: number) => (
                <Tooltip title={variant.color} key={index} arrow>
                  <Typography
                    className='product-img__ava'
                    component={'span'}
                    onClick={() => handleChangeImage(index)}
                  >
                    <Avatar
                      alt={variant.color}
                      src={variant.subImage?.[0]}
                      sx={{width: '24px', height: '24px', cursor: 'pointer'}}
                    />
                  </Typography>
                </Tooltip>
              ))}
            </AvatarGroup>
          </Box>
        </Box>
      </Box>
      <ProductDialog item={item} open={open} handleClose={handleClose} />
    </Box>
  )
}
