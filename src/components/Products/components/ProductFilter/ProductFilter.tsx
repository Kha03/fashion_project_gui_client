import {Box} from '@mui/material'
import CategoryFilter from '../Filter/CategoryFilter'
import PriceFilter from '../Filter/PriceFilter'
import ColorFilter from '../Filter/ColorFilter'

export interface IProductFilterProps {
  onFilterChange: object
}

export default function ProductFilter({onFilterChange}: IProductFilterProps) {
  return (
    <Box padding={'15px'}>
      <CategoryFilter />
      <hr />
      <PriceFilter />
      <hr />
      <ColorFilter />
    </Box>
  )
}
