import {Product} from '@/model'
import * as React from 'react'

export interface IProductDetailInfoProps {
  item: Product
}

export default function ProductDetailInfo(props: IProductDetailInfoProps) {
  const productVariant = useUniqueProductVariantsByColor(item.productVariants)
  return <div></div>
}
