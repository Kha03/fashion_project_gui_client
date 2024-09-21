import CircleIcon from '@mui/icons-material/Circle'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import {Box, Checkbox, FormControlLabel, Typography} from '@mui/material'
import * as React from 'react'
import {useState} from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
export interface IColorFilterProps {
  onChange: (newColor: object | string[]) => void
}
export default function ColorFilter({onChange}: IColorFilterProps) {
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [visibleColors, setVisibleColors] = useState(4)

  const handleShowMoreColors = () => {
    setVisibleColors((prev) => (prev === 4 ? colors.length : 4))
  }
  const colors = [
    {name: 'Đen', color: 'black'},
    {name: 'Xanh đen', color: 'darkblue'},
    {name: 'Nâu đậm', color: 'darkbrown'},
    {name: 'Nâu nhạt', color: 'lightbrown'},
    {name: 'Hồng', color: 'pink'},
    {name: 'Kem', color: 'cream'},
    {name: 'Đỏ', color: 'red'},
  ]
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {checked, value} = event.target
    setSelectedColors((prev) =>
      checked ? [...prev, value] : prev.filter((color) => color !== value),
    )
    onChange(
      checked ? [...selectedColors, value] : selectedColors.filter((color) => color !== value),
    )
  }

  return (
    <Box>
      {colors.slice(0, visibleColors).map((color) => (
        <Box key={color.color}>
          <FormControlLabel
            key={color.color}
            control={
              <Checkbox
                icon={<CircleIcon style={{color: color.color}} />}
                checked={selectedColors.includes(color.color)}
                onChange={handleChange}
                value={color.color}
                // style={{color: color.color}}
                checkedIcon={
                  <CircleIcon
                    style={{color: color.color}}
                    sx={{
                      padding: '1px',
                      borderColor: 'black',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderRadius: '50%',
                    }}
                  />
                }
                size='large'
              />
            }
            label={color.name}
          />
        </Box>
      ))}
      {
        <Typography
          onClick={handleShowMoreColors}
          sx={{
            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            cursor: 'pointer',
            color: 'primary.main',
            marginTop: '8px',
            ':hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {visibleColors === 4 ? (
            <>
              Xem thêm
              <KeyboardArrowDownIcon />
            </>
          ) : (
            <>
              Rút gọn
              <KeyboardArrowUpIcon />
            </>
          )}
        </Typography>
      }
    </Box>
  )
}
