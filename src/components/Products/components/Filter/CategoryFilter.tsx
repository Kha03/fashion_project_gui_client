import {Box, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material'
import * as React from 'react'
import {useEffect, useState} from 'react'

export interface ICategoryFilterProps {
  onChange: (newCategory: object) => void
}

export default function CategoryFilter({onChange}: ICategoryFilterProps) {
  const categories_exp = [
    {id: 1, name: 'Gym'},
    {id: 2, name: 'Yoga'},
    {id: 3, name: 'Running'},
  ]

  const [categories, setCategories] = useState<{id: number; name: string}[]>([])

  const [selectedCategory, setSelectedCategory] = useState('')
  useEffect(() => {
    // (async () => {
    //   const listCate = await CategoryApi.getAll();
    //   setCategories(
    //     listCate.map((x) => ({
    //       id: x.id,
    //       name: x.name,
    //     }))
    //   );
    // })();
    setCategories(
      categories_exp.map((x) => ({
        id: x.id,
        name: x.name,
      })),
    )
  }, [])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value)
    onChange({_category: event.target.value})
  }

  return (
    <Box>
      <Typography variant='h4' fontSize='1.8rem' marginBottom={1}>
        Danh mục
      </Typography>
      <RadioGroup value={selectedCategory} onChange={handleChange}>
        {categories.map((category) => (
          <FormControlLabel
            key={category.id}
            value={String(category.name)}
            control={<Radio />}
            label={category.name}
            sx={{
              '& .MuiRadio-root': {display: 'none'}, // Hide the radio icon
              '& .MuiFormControlLabel-label': {
                color: selectedCategory == category.name ? '#2196f3' : 'inherit',
                fontSize: '1.5rem',
                paddingLeft: '10px',
              },
            }}
          />
        ))}
      </RadioGroup>
    </Box>
  )
}
