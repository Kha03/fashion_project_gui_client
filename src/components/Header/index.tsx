import store from '@/app/store'
import {logout} from '@/features/Auth/userSlice'
import {Menu, MenuItem} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import LoginDialog from './components/LoginDialog'
import SubMenu from './components/SubMenu/SubMenu'

const MenuItems = [
  {
    id: '1',
    title: 'Home',
    isParent: false,
    subItem: [],
  },
  {
    id: '2',
    title: 'About',
    isParent: true,
    subItem: [
      {
        id: '2.1',
        title: 'About Us',
        isParent: true,
        subItem: [
          {
            id: '2.1.1',
            title: 'Our Mission Our Mission Our Mission Our Mission',
            isParent: false,
            subItem: [],
          },
          {
            id: '2.1.2',
            title: 'Our Vision',
            isParent: false,
            subItem: [],
          },
        ],
      },
      {
        id: '2.2',
        title: 'Our Team',
        isParent: true,
        subItem: [
          {
            id: '2.2.1',
            title: 'Team 1',
            isParent: false,
            subItem: [],
          },
          {
            id: '2.2.2',
            title: 'Team 2',
            isParent: false,
            subItem: [],
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Services',
    isParent: true,
    subItem: [
      {
        id: '3.1',
        title: 'Service 1',
        isParent: false,
        subItem: [],
      },
      {
        id: '3.2',
        title: 'Service 2',
        isParent: false,
        subItem: [],
      },
    ],
  },
  {
    id: '4',
    title: 'Contact',
    isParent: false,
    subItem: [],
  },
]

export default function Header() {
  const [openDialog, setOpenDialog] = useState(false)
  const currentUser = useSelector((state: ReturnType<typeof store.getState>) => state.user.current)
  const islogin = !!currentUser.username
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseUser = () => {
    setAnchorEl(null)
  }
  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar
        position='fixed'
        sx={{borderBottom: '1px solid #000000', color: '#000', background: '#fff', height: '65px'}}
      >
        <Toolbar sx={{alignItems: 'center', gap: '15px', width: '1230px', margin: '0 auto'}}>
          <Box>
            <Typography
              component='a'
              href='#!'
              display='block'
              sx={{
                height: 45,
                width: 134,
              }}
            >
              <Box component='img' alt='' src='../src/assets/img/logo.png' />
            </Typography>
          </Box>
          <Box width={'100%'}>
            {/* <ul className='nav-list'>
              {pages.map((page, index) => (
                <li key={index} className='nav-item'>
                  <a href='#!' className='nav-link'>
                    {page} <KeyboardArrowDownIcon sx={{marginLeft: '8px'}} />
                  </a>
                </li>
              ))}
            </ul> */}
            <SubMenu items={MenuItems} />
          </Box>
          {islogin ? (
            <>
              <Typography
                variant='h6'
                sx={{fontSize: '1.6rem', cursor: 'default'}}
                onClick={handleClick}
              >
                {currentUser.infoUserDto.firstName}
              </Typography>
              <Menu
                anchorEl={anchorEl}
                id='account-menu'
                open={open}
                onClose={handleCloseUser}
                onClick={handleCloseUser}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
              >
                <MenuItem onClick={handleCloseUser}>
                  <Typography component='span' sx={{fontSize: '1.3rem'}}>
                    Tài Khoản
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Typography component='span' sx={{fontSize: '1.3rem'}}>
                    Đăng Xuất
                  </Typography>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button color='inherit' sx={{fontSize: '1.6rem'}} onClick={handleClickOpen}>
              Login
            </Button>
          )}
          <LoginDialog open={openDialog} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
