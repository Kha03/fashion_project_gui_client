import {Box, Container, Paper} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import SortProductFilter from '../components/Filter/SortProductFilter'
import ProductFilter from '../components/ProductFilter/ProductFilter'
import ProductList from '../components/ProductList/ProductList'
import queryString from 'query-string'
import {useLocation, useNavigate} from 'react-router-dom'
import {useMemo} from 'react'

export default function ListProduct() {
  interface params {
    _page?: number
    _limit?: number
    _sort?: string
    _color?: Array<string>
    _category?: string
    _price_gte?: number
    _price_lte?: number
  }
  const history = useNavigate()
  const location = useLocation()
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search) as params
    return {
      ...params,
      _page: params._page || 1,
      _limit: params._limit || 9,
      _sort: params._sort || 'salePrice:ASC',
    }
  }, [location.search])
  const handleFilterChange = (newFilter: object) => {
    const newQuery = {
      ...queryParams,
      ...newFilter,
    }
    console.log(newQuery)
    history({search: queryString.stringify(newQuery)})
  }
  const handleSortChange = (newSort: string) => {
    const newQuery = {
      ...queryParams,
      _sort: newSort,
    }
    history({search: queryString.stringify(newQuery)})
  }
  return (
    <Box sx={{flexGrow: 1}} mt={'65px'}>
      <Container maxWidth={'lg'}>
        <Grid2 container>
          <Grid2 xs={2}>
            <ProductFilter onChange={handleFilterChange} />
          </Grid2>
          <Grid2 xs={10}>
            <Paper sx={{padding: '8px 0', marginTop: '12px'}}>
              <Box marginBottom={2} marginRight={2} display='flex' justifyContent='flex-end'>
                <SortProductFilter onChange={handleSortChange} />
              </Box>
              <ProductList />
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}
