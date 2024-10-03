import {Product} from '@/model'
import Grid2 from '@mui/material/Grid2'
import ProductItem from '../ProductItem'

export interface IProductListProps {
  products: Product[]
}
const product = [
  {
    productID: 1,
    name: 'Áo croptop tập gym yoga',
    description: 'description',
    createdDate: '12/2/2021',
    originalPrice: 350000,
    discountedPrice: 290000,
    discountPercentage: 0.18,
    image: './src/assets/img/product_1.png',
    productVariants: [
      {
        productVariantID: 1,
        sku: 'sku',
        size: 'M',
        color: 'Đỏ',
        productID: 'productID',
        subImage: ['./src/assets/img/product_6.png'],
      },
      {
        productVariantID: 2,
        sku: 'sku',
        size: 'L',
        color: 'Hồng',
        productID: 'productID',
        subImage: ['./src/assets/img/product_5.png'],
      },
      {
        productVariantID: 3,
        sku: 'sku',
        size: 'S',
        color: 'Xanh Dương',
        productID: 'productID',
        subImage: ['./src/assets/img/product_4.png'],
      },
      {
        productVariantID: 4,
        sku: 'sku',
        size: 'XL',
        color: 'Đen',
        productID: 'productID',
        subImage: ['./src/assets/img/product_3.png'],
      },
      {
        productVariantID: 5,
        sku: 'sku',
        size: 'XXL',
        color: 'Trắng',
        productID: 'productID',
        subImage: ['./src/assets/img/product_2.png'],
      },
      {
        productVariantID: 6,
        sku: 'sku',
        size: 'XL',
        color: 'Trắng',
        productID: 'productID',
        subImage: ['./src/assets/img/product_2.png'],
      },
    ],
  },
  {
    productID: 2,
    name: 'name',
    description: 'description',
    createdDate: '12/2/2021',
    originalPrice: 350000,
    image: './src/assets/img/product_1.png',
    productVariants: [
      {
        productVariantID: 1,
        sku: 'sku',
        size: 'M',
        color: 'Đỏ',
        productID: 'productID',
        subImage: ['./src/assets/img/product_6.png'],
      },
      {
        productVariantID: 2,
        sku: 'sku',
        size: 'L',
        color: 'Hồng',
        productID: 'productID',
        subImage: ['./src/assets/img/product_5.png'],
      },
    ],
  },
  {
    productID: 3,
    name: 'name',
    description: 'description',
    createdDate: '12/2/2021',
    originalPrice: 350000,
    image: './src/assets/img/product_1.png',
    productVariants: [
      {
        productVariantID: 1,
        sku: 'sku',
        size: 'XL',
        color: 'Đỏ',
        productID: 'productID',
        subImage: ['./src/assets/img/product_6.png'],
      },
      {
        productVariantID: 2,
        sku: 'sku',
        size: 'XXL',
        color: 'Hồng',
        productID: 'productID',
        subImage: ['./src/assets/img/product_5.png'],
      },
    ],
  },
  {
    productID: 4,
    name: 'name',
    description: 'description',
    createdDate: '12/2/2021',
    originalPrice: 350000,
    image: './src/assets/img/product_1.png',
    productVariants: [
      {
        productVariantID: 1,
        sku: 'sku',
        size: 'S',
        color: 'Đỏ',
        productID: 'productID',
        subImage: ['./src/assets/img/product_6.png'],
      },
      {
        productVariantID: 2,
        sku: 'sku',
        size: 'M',
        color: 'Hồng',
        productID: 'productID',
        subImage: ['./src/assets/img/product_5.png'],
      },
    ],
  },
  {
    productID: 2,
    name: 'name',
    description: 'description',
    createdDate: '12/2/2021',
    originalPrice: 350000,
    image: './src/assets/img/product_1.png',
    productVariants: [
      {
        productVariantID: 1,
        sku: 'sku',
        size: 'M',
        color: 'Đỏ',
        productID: 'productID',
        subImage: ['./src/assets/img/product_6.png'],
      },
      {
        productVariantID: 2,
        sku: 'sku',
        size: 'L',
        color: 'Hồng',
        productID: 'productID',
        subImage: ['./src/assets/img/product_5.png'],
      },
    ],
  },
  {
    productID: 2,
    name: 'name',
    description: 'description',
    createdDate: '12/2/2021',
    originalPrice: 350000,
    image: './src/assets/img/product_1.png',
    productVariants: [
      {
        productVariantID: 1,
        sku: 'sku',
        size: 'M',
        color: 'Đỏ',
        productID: 'productID',
        subImage: ['./src/assets/img/product_6.png'],
      },
      {
        productVariantID: 2,
        sku: 'sku',
        size: 'L',
        color: 'Hồng',
        productID: 'productID',
        subImage: ['./src/assets/img/product_5.png'],
      },
    ],
  },
  {
    productID: 2,
    name: 'name',
    description: 'description',
    createdDate: '12/2/2021',
    originalPrice: 350000,
    image: './src/assets/img/product_1.png',
    productVariants: [
      {
        productVariantID: 1,
        sku: 'sku',
        size: 'M',
        color: 'Đỏ',
        productID: 'productID',
        subImage: ['./src/assets/img/product_6.png'],
      },
      {
        productVariantID: 2,
        sku: 'sku',
        size: 'L',
        color: 'Hồng',
        productID: 'productID',
        subImage: ['./src/assets/img/product_5.png'],
      },
    ],
  },
  {
    productID: 2,
    name: 'name',
    description: 'description',
    createdDate: '12/2/2021',
    originalPrice: 350000,
    image: './src/assets/img/product_1.png',
    productVariants: [
      {
        productVariantID: 1,
        sku: 'sku',
        size: 'M',
        color: 'Đỏ',
        productID: 'productID',
        subImage: ['./src/assets/img/product_6.png'],
      },
      {
        productVariantID: 2,
        sku: 'sku',
        size: 'L',
        color: 'Hồng',
        productID: 'productID',
        subImage: ['./src/assets/img/product_5.png'],
      },
    ],
  },
]
export default function ProductList() {
  return (
    <Grid2 container justifyContent={'flex-start'}>
      {product.map((item, index) => (
        <Grid2 key={index} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
          <ProductItem item={item} size='small' />
        </Grid2>
      ))}
    </Grid2>
  )
}
