import {Box, Checkbox, FormControlLabel, FormGroup, Typography} from '@mui/material'
import {useState} from 'react'
import * as React from 'react'

export interface ICategoryFilterProps {}

export default function CategoryFilter(props: ICategoryFilterProps) {
  const categories = [
    {key: 'Khuyến mãi', value: 'isPromotion'},
    {key: 'Miễn phí giao hàng', value: 'isFreeShip'},
  ]

  const [checked, setChecked] = useState<{[key: string]: boolean}>({
    isPromotion: false,
    isFreeShip: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = event.target
    setChecked((prevChecked) => ({
      ...prevChecked,
      [name]: checked,
    }))
  }

  return (
    <Box>
      <Typography variant='h4' fontSize='1.8rem'>
        Danh mục
      </Typography>
      <FormGroup>
        {categories.map((category) => (
          <FormControlLabel
            key={category.key}
            control={
              <Checkbox
                onChange={handleChange}
                checked={checked[category.value]}
                name={category.value}
              />
            }
            label={category.key}
            value={category.value}
            sx={{'& .MuiTypography-root': {fontSize: '1.4rem'}}}
          />
        ))}
      </FormGroup>
    </Box>
  )
}
