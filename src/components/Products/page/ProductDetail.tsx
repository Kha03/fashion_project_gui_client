import {Box, Container} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import {useEffect, useState} from 'react'
import ProductImageDetail from '../components/ProductImageDetail'
import ProductListImgDetail from '../components/ProductListImgDetail'

export interface IProductDetailProps {
  idProduct: string
}

export default function ProductDetail({idProduct}: IProductDetailProps) {
  const product = {
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
        subImage: ['./src/assets/img/product_1.png'],
      },
    ],
  }
  const [img, setImg] = useState<string>(product.image)
  const subImages = product.productVariants.flatMap((item) => item.subImage)
  const hanleChangeImg = (img: string) => {
    setImg(img)
  }
  useEffect(() => {
    console.log(idProduct)
  }, [idProduct])
  return (
    <Box sx={{flexGrow: 1}} mt={'65px'} pt={'10px'}>
      <Container maxWidth={'lg'}>
        <Grid2 container>
          <Grid2 xs={6}>
            <Box display={'flex'} justifyContent={'center'}>
              <ProductListImgDetail listImg={subImages} onChange={hanleChangeImg} />
              <ProductImageDetail url={img} />
            </Box>
          </Grid2>
          <Grid2 xs={6}></Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}
