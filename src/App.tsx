import {Box, ThemeProvider} from '@mui/material'
import './App.scss'
import Header from './components/Header'
import {Route, Routes} from 'react-router-dom'
import ListProduct from './components/Products/page/ListProduct'
import Home from './components/Home/components/Home'
import themeStyle from './common/themeStyle'

function App() {
  return (
    <ThemeProvider theme={themeStyle}>
      <Box>
        <Header />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/products' element={<ListProduct />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
