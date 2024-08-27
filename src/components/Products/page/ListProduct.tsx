import {Box, Container, Paper} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import ProductList from '../components/ProductList/ProductList'
import ProductFilter from '../components/ProductFilter/ProductFilter'

export default function ListProduct() {
  const filter = {
    isPromotion: false,
    isFreeShip: false,
  }
  return (
    <Box sx={{flexGrow: 1}} mt={'65px'}>
      <Container maxWidth={'lg'}>
        <Grid2 container>
          <Grid2 xs={2}>
            <ProductFilter onFilterChange={filter} />
          </Grid2>
          <Grid2 xs={10}>
            <Paper sx={{padding: '8px 0', marginTop: '12px'}}>
              <ProductList />
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}
