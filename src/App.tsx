import {Box, ThemeProvider} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
import './App.scss'
import themeStyle from './common/themeStyle'
import Cart from './components/Cart/page/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home/components/Home'
import ListProduct from './components/Products/page/ListProduct'
import ProductDetail from './components/Products/page/ProductDetail'

function App() {
  return (
    <ThemeProvider theme={themeStyle}>
      <Box>
        <Header />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/products' element={<ListProduct />} />
          <Route path='/product' element={<ProductDetail idProduct='1' />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
