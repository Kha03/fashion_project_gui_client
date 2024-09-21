import {createTheme} from '@mui/material/styles'

const themeStyle = createTheme({
  palette: {
    primary: {
      light: '#757575', // Lighter shade of black/gray
      main: '#000000', // Main black color
      dark: '#000000', // Dark black
      contrastText: '#ffffff', // White text to contrast black background
    },
    secondary: {
      light: '#ffffff', // Light white
      main: '#ffffff', // Main white color
      dark: '#e0e0e0', // Darker shade of white (light gray)
      contrastText: '#000000', // Black text to contrast white background
    },
  },
})

export default themeStyle
