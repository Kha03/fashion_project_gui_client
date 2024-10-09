import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/Cart/CartSlice'
import userReducer from '../features/Auth/userSlice'

const saveToLocalStorage = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state.cart)
    localStorage.setItem('cart', serializedState)
  } catch (e) {
    console.error('Could not save state', e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.error('Could not load state', e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

// Cấu hình store với các reducer
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: persistedState,
  },
})

// Lưu trạng thái cart vào localStorage mỗi khi có sự thay đổi
store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
