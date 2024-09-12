import {Box, Checkbox, FormControlLabel} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import * as React from 'react'
import {useState} from 'react'

export interface IColorFilterProps {}

export default function ColorFilter() {
  const [selectedColors, setSelectedColors] = useState<string[]>([])

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
  }
  return colors.map((color) => (
    <Box>
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
  ))
}
