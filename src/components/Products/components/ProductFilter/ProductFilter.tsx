import {Box} from '@mui/material'
import CategoryFilter from '../Filter/CategoryFilter'
import PriceFilter from '../Filter/PriceFilter'
import ColorFilter from '../Filter/ColorFilter'

export interface IProductFilterProps {
  onChange: (newFilter: object) => void
}

export default function ProductFilter({onChange}: IProductFilterProps) {
  const handleChange = (newCategory: object | string[]) => {
    onChange(newCategory)
  }
  return (
    <Box padding={'15px'}>
      <CategoryFilter onChange={handleChange} />
      <hr />
      <PriceFilter onChange={handleChange} />
      <hr />
      <ColorFilter onChange={handleChange} />
    </Box>
  )
}
