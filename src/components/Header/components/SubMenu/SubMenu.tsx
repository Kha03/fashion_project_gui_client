import {Box} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import './style.scss'
export interface ISubMenuProps {
  items: MenuItems[]
}

export interface MenuItems {
  id: string
  title: string
  isParent: boolean
  subItem: MenuItems[]
}
export default function SubMenu({items}: ISubMenuProps) {
  return (
    <ul className='nav-list cate-list-header'>
      {items.map((item) => {
        return (
          <li key={item.id} className='nav-item'>
            <a href='#!' className='nav-link'>
              {item.title}
              {item.isParent && <ArrowDropDownIcon sx={{marginLeft: '8px'}} fontSize='large' />}
            </a>
            {item.isParent ? (
              <Box className='subMenu'>
                <Box
                  component={'div'}
                  className='subMenu__content'
                  sx={{display: 'flex', alignItems: 'center', padding: '20px', columnGap: '40px'}}
                >
                  {item.subItem.some((subItem) => subItem.isParent) ? (
                    item.subItem.map((subItem) => (
                      <Box key={subItem.id} className='subMenu-Column'>
                        <ul className='nav-list__submenu cate-list-header'>
                          <li className='nav-item'>
                            <a href='#!' className='nav-link__submenu'>
                              {subItem.title}
                            </a>
                          </li>
                          {subItem.isParent &&
                            subItem.subItem.map((subSubItem) => (
                              <li key={subSubItem.id} className='nav-item'>
                                <a href='#!' className='nav-link__submenu'>
                                  {subSubItem.title}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </Box>
                    ))
                  ) : (
                    <Box className='subMenu-Column'>
                      <ul className='nav-list__submenu cate-list-header'>
                        {item.subItem.map((subItem) => (
                          <li key={subItem.id} className='nav-item__sgn'>
                            <a href='#!' className='nav-link__submenu'>
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}
                </Box>
              </Box>
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}
