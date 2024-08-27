import {CartItem} from '@/model'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface CartState {
  showMiniCart: boolean
  cart: CartItem[]
}
const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cart: [],
  } as CartState,
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true
    },
    hideMiniCart(state) {
      state.showMiniCart = false
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload
      const index = state.cart.findIndex((x) => x.id === newItem.id)
      if (index >= 0) {
        state.cart[index].quantity += newItem.quantity
      } else {
        state.cart.push(newItem)
      }
    },
    setQuantity(state, action: PayloadAction<{id: number; quantity: number}>) {
      const {id, quantity} = action.payload
      const index = state.cart.findIndex((x) => x.id === id)
      if (index >= 0) {
        state.cart[index].quantity = quantity
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const idNeedToRemove = action.payload
      state.cart = state.cart.filter((x) => x.id !== idNeedToRemove)
    },
  },
})
export const {actions, reducer} = CartSlice
export const {showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart} = actions
export default reducer
