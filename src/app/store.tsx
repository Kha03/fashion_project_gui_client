import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/Cart/CartSlice'
import userReducer from '../features/Auth/userSlice'

// Cấu hình store với các reducer
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export default store
