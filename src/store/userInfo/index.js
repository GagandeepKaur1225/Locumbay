import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'userInfo',
  initialState: { idUser: '', email: '', userName: '' },
  reducers: {
    saveUser: (initialState, payload) => {
      console.log(payload.payload, 'PAYLOAD IS');
      initialState.idUser = payload.payload.user.id;
      initialState.email = payload.payload.user.email;
      initialState.userName = payload.payload.user.name;
    },
    logOut: (initialState, payload) => {
      initialState.idUser = '';
      initialState.email = '';
      initialState.userName = '';
    },
  },
});
export const { saveUser } = slice.actions;
export default slice.reducer;
