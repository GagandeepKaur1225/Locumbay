import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'remembereduserInfo',
  initialState: {
    rememberedUsers: {},
  },
  reducers: {
    rememberUserInfo: (initialState, payload) => {
      const keys = Object.keys(initialState.rememberedUsers);
      if (!keys.includes(payload.payload.email)) {
        initialState.rememberedUsers[payload.payload.email] = payload.payload;
      }
    },
  },
});
export const { rememberUserInfo } = slice.actions;
export default slice.reducer;
