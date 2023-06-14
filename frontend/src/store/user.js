import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialUserState =
  Cookies.get('user') && Cookies.get('user') !== 'undefined'
    ? JSON.parse(Cookies.get('user'))
    : null;
// JSON.parse(Cookies.get('user'));
const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState, // so refresh the page will not loose redux state
  reducers: {
    login(state, action) {
      state = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
