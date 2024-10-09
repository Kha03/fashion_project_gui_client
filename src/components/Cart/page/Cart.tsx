import {RootState} from '@/app/store'
import {cartTotalSelector, countItemsSelector} from '@/features/Cart/Selectors'
import {Alert, Box, Container, Snackbar, SnackbarCloseReason} from '@mui/material'
import Grid from '@mui/material/Grid2'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import CartInfo from '../components/CartInfo'
import CartItem from '../components/CartItem'

export default function Cart() {
  const itemCarts = useSelector((state: RootState) => state.cart.cart)
  const total = useSelector(cartTotalSelector)
  const count = useSelector(countItemsSelector)
  //state snackbar remove cart
  const [open, setOpen] = useState(false)

  const handleOpenSnack = () => {
    setOpen(true)
  }

  const handleCloseSnack = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Box sx={{flexGrow: 1}} mt={'65px'}>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Box>
              <h3>Giỏ hàng</h3>
            </Box>
          </Grid>
          <Grid size={8} height={'auto'}>
            {itemCarts.map((item) => (
              <CartItem key={item.id} item={item} handleToast={handleOpenSnack} />
            ))}
          </Grid>
          <Grid size={4}>
            <CartInfo total={total} count={count} />
          </Grid>
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={1500}
          onClose={handleCloseSnack}
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        >
          <Alert
            onClose={handleCloseSnack}
            severity='success'
            variant='standard'
            sx={{width: '100%', fontSize: '1.2rem'}}
          >
            Xóa sản phẩm thành công
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  )
}
