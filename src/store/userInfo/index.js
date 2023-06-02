import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'userInfo',
  initialState: { idUser: '', email: '', userName: '', password: '' },
  reducers: {
    saveUser: (initialState, payload) => {
      console.log(payload.payload, 'PAYLOAD IS');
      initialState.idUser = payload.payload.user.id;
      initialState.email = payload.payload.user.email;
      initialState.userName = payload.payload.user.name;
    },
    saveEnteredInfo: (initialState, payload) => {
      console.log(payload, 'payload for saving entered info is');
      initialState.email = payload.payload.email;
      initialState.password = payload.payload.pass;
    },
    logOut: (initialState, payload) => {
      initialState.idUser = '';
      initialState.email = '';
      initialState.userName = '';
      initialState.password = '';
    },
    addFacebookToken: (initialState, payload) => {
      console.log('payload for facebook dispatcher', payload);
      initialState.idUser = payload.payload.id;
      initialState.userName = payload.payload.name;
    },
  },
});
export const { saveUser, logOut, addFacebookToken, saveEnteredInfo } =
  slice.actions;
export default slice.reducer;
