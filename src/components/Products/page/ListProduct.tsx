import {Box, Container, Pagination, Paper} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import queryString from 'query-string'
import {useMemo, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import SortProductFilter from '../components/Filter/SortProductFilter'
import ProductFilter from '../components/ProductFilter/ProductFilter'
import ProductList from '../components/ProductList/ProductList'

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
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 8,
    _total: 100,
  })
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search) as params
    return {
      ...params,
      _page: params._page || 1,
      _limit: params._limit || 8,
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
  const handlePageChange = (e: object, page: number) => {
    const newQuery = {
      ...queryParams,
      _page: page,
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
              <Box display='flex' justifyContent='center' marginTop={2}>
                <Pagination
                  count={Math.ceil(pagination._total / pagination._limit)}
                  size='medium'
                  sx={{
                    '& .MuiPaginationItem-text': {
                      fontSize: '1.4rem',
                      color: '#000',
                      backgroundColor: '#fff',
                    },
                    '& .MuiPaginationItem-root:hover': {
                      backgroundColor: '#ddd',
                      color: '#000',
                    },
                    '& .Mui-selected': {
                      color: '#fff',
                      backgroundColor: '#000',
                    },
                  }}
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}
