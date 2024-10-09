import {RootState} from '@/app/store'
import {createSelector} from '@reduxjs/toolkit'

const cartItemsSelector = (state: RootState) => state.cart.cart
export const countItemsSelector = createSelector(cartItemsSelector, (cart) =>
  cart.reduce((count, item) => count + item.quantity, 0),
)
export const cartTotalSelector = createSelector(cartItemsSelector, (cart) =>
  cart.reduce(
    (total, item) =>
      item.product.discountedPrice
        ? total + item.product.discountedPrice * item.quantity
        : total + item.product.originalPrice * item.quantity,
    0,
  ),
)
