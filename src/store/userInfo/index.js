import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'userInfo',
  initialState: {
    idUser: '',
    email: '',
    userName: '',
    password: '',
  },
  reducers: {
    saveUser: (initialState, payload) => {
      initialState.idUser = payload.payload.user.id;
      initialState.email = payload.payload.user.email;
      initialState.userName = payload.payload.user.name;
    },
    saveEnteredInfo: (initialState, payload) => {
      initialState.email = payload.payload.email;
      initialState.password = payload.payload.pass;
      initialState.userName = payload.payload.userName;
      initialState.idUser = payload.payload.userId;
    },
    logOut: (initialState, payload) => {
      initialState.idUser = '';
      initialState.email = '';
      initialState.userName = '';
      initialState.password = '';
    },
    addFacebookToken: (initialState, payload) => {
      console.log(payload.payload, 'payload for facebook is');
      initialState.idUser = payload.payload.id;
      initialState.userName = payload.payload.name;
    },
  },
});
export const { saveUser, logOut, addFacebookToken, saveEnteredInfo } =
  slice.actions;
export default slice.reducer;
