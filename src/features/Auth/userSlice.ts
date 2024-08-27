import userApi from '@/api/user'
import {requestLogin} from '@/model'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
export const registerUser = createAsyncThunk(
  '/user/login',
  // if you type your function argument here
  async (payload: requestLogin) => {
    const response = await userApi.postUser(payload)

    localStorage.setItem('access_token', response.jwt)
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
  },
)
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user') || '{}'),
    settings: {},
  },
  reducers: {
    logout(state) {
      // Clear local storage
      localStorage.removeItem('user')
      // Clear state
      state.current = {}
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(registerUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.current = action.payload
    })
  },
})
const {reducer} = userSlice
export const {logout} = userSlice.actions
export default reducer
