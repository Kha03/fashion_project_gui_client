import {Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography} from '@mui/material'
import {useState} from 'react'
export interface ISortProductFilterProps {
  onChange: (newFilter: string) => void
}
export default function SortProductFilter({onChange}: ISortProductFilterProps) {
  const valueSort = {
    'name-asc': 'Tên A-Z',
    'name-desc': 'Tên Z-A',
    'price-asc': 'Giá tăng dần',
    'price-desc': 'Giá giảm dần',
  }
  const [sortProduct, setSortProduct] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSortProduct(event.target.value as string)
    if (onChange) {
      onChange(event.target.value as string)
    }
  }
  return (
    <Box sx={{minWidth: 200, display: 'flex', alignItems: 'center'}}>
      <Typography fontSize={'1.6rem'} sx={{textWrap: 'nowrap', marginRight: 1}}>
        Sắp xếp:
      </Typography>
      <FormControl fullWidth>
        <Select
          value={sortProduct}
          label=''
          onChange={handleChange}
          sx={{fontSize: '1.4rem', height: '30px'}}
        >
          {Object.entries(valueSort).map(([key, value]) => (
            <MenuItem key={key} value={key} sx={{fontSize: '1.4rem'}}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
