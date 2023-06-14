import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const userSlice = createSlice({
  name: 'user',
  initialState: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null, // so refresh the page will not loose redux state
  reducers: {
    login(state, action) {
      state = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
