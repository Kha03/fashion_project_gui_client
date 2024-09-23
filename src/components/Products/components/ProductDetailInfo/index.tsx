import {formatCurrency} from '@/common'
import CouponCommon from '@/components/Coupon/CouponCommon'
import useUniqueProductVariantsByColor from '@/hooks/useUniqueProductVariantsByColor'
import {Product} from '@/model'
import {Box, Typography} from '@mui/material'
import * as React from 'react'

export interface IProductDetailInfoProps {
  item: Product
}

export default function ProductDetailInfo({item}: IProductDetailInfoProps) {
  const productVariant = useUniqueProductVariantsByColor(item.productVariants)

  return (
    <Box ml={5} padding={3}>
      <Typography component={'h3'} sx={{fontSize: '2.8rem', fontWeight: '500', lineHeight: '112%'}}>
        {item.name}
      </Typography>
      <Typography fontSize={'1.4rem'} mt={3}>
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
        <Typography component={'span'} ml={1} sx={{fontSize: '1.4rem', color: '#f44336'}}>
          {item.discountPercentage ? `-${item.discountPercentage * 100}%` : null}
        </Typography>
      </Box>
      <Typography fontSize={'1.4rem'} mt={1} color={'#757575'}>
        {item.discountedPrice
          ? `Tiết kiệm ${formatCurrency(item.originalPrice - item.discountedPrice)}`
          : null}
      </Typography>
      <Box mt={5}>
        <CouponCommon />
      </Box>
    </Box>
  )
}
