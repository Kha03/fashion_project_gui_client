import {Box} from '@mui/material'
import './App.scss'
import Header from './components/Header'
import {Route, Routes} from 'react-router-dom'
import ListProduct from './components/Products/page/ListProduct'
import Home from './components/Home/components/Home'

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/products' element={<ListProduct />} />
      </Routes>
    </Box>
  )
}

export default App
