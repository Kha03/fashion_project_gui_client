import {TabList} from '@mui/lab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import {Box} from '@mui/material'
import Tab from '@mui/material/Tab'
import * as React from 'react'
import ShippingPolicy from './ShippingPolicy' // Nhập component Chính Sách Giao Hàng
import ReturnPolicy from './ReturnPolicy' // Nhập component Chính Sách Đổi Trả

export interface IProductTabsProps {
  description: string
}

export default function ProductTabs({description}: IProductTabsProps) {
  const [value, setValue] = React.useState('1')

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{width: '100%'}}>
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} centered sx={{'& .MuiTab-root': {fontSize: '1.4rem'}}}>
            <Tab label='Mô tả sản phẩm' value='1' disableRipple />
            <Tab label='Chính sách giao hàng' value='2' disableRipple />
            <Tab label='Chính sách đổi trả' value='3' disableRipple />
          </TabList>
        </Box>
        <TabPanel value='1'>{description}</TabPanel>
        <TabPanel value='2'>
          <ShippingPolicy />
        </TabPanel>
        <TabPanel value='3'>
          <ReturnPolicy />
        </TabPanel>
      </TabContext>
    </Box>
  )
}
