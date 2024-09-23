import {useMemo} from 'react'
import {ProductVariant} from '@/model'

const useUniqueProductVariantsByColor = (productVariants: ProductVariant[] | undefined) => {
  const uniqueVariants = useMemo(() => {
    if (!productVariants) return []

    return productVariants.filter((variant, index, self) => {
      return index === self.findIndex((v) => v.color === variant.color)
    })
  }, [productVariants])

  return uniqueVariants
}

export default useUniqueProductVariantsByColor
