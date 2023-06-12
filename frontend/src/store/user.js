import { createSlice } from '@reduxjs/toolkit';

const initialUserState = 'hello';
const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login(state, action) {
      state = action.payload;
    },
  },
});

export default userSlice.reducer;
