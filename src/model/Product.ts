export interface ProductVariant {
  productVariantID: number
  sku: string
  size: string
  color: string
  productID?: string
  subImage?: string[]
}
export interface Product {
  productID: number
  name: string
  description?: string
  createdDate: string
  originalPrice: number
  discountedPrice?: number
  discountPercentage?: number
  image?: string
  productVariants?: ProductVariant[]
}
export interface CartItem {
  id: number
  productVariantId?: number
  product: Product
  quantity: number
}
