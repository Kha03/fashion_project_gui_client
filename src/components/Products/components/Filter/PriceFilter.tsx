import {formatCurrency} from '@/common'
import {Button} from '@mui/material'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import {useState} from 'react'

const minDistance = 1000000 // Minimum distance 1 million VND
const maxPrice = 10000000 // Maximum price is 10 million VND
interface IPriceFilterProps {
  onChange: (newPrice: object) => void
}

export default function PriceFilter({onChange}: IPriceFilterProps) {
  const [priceRange, setPriceRange] = useState<number[]>([0, maxPrice])

  const handlePriceChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }
    if (activeThumb === 0) {
      setPriceRange([Math.min(newValue[0], priceRange[1] - minDistance), priceRange[1]])
    } else {
      setPriceRange([priceRange[0], Math.max(newValue[1], priceRange[0] + minDistance)])
    }
  }
  const handleButtonClick = () => {
    const selectedRange = {
      _price_gte: priceRange[0],
      _price_lte: priceRange[1],
    }
    onChange(selectedRange)
    console.log(selectedRange)
  }
  return (
    <Box sx={{width: '100%'}}>
      <Typography variant='h6' gutterBottom>
        Chọn mức giá sản phẩm
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay='auto'
        min={0}
        max={maxPrice}
        step={500000}
        disableSwap
      />
      <Typography fontSize={'1.2rem'}>
        {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}
      </Typography>
      <Button variant='contained' color='primary' onClick={handleButtonClick} sx={{mt: 2}}>
        Áp dụng
      </Button>
    </Box>
  )
}
