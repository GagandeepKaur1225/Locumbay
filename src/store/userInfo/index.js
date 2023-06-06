import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'userInfo',
  initialState: {
    idUser: '',
    email: '',
    userName: '',
    password: '',
    rememberedUsers: {},
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
    },
    logOut: (initialState, payload) => {
      initialState.idUser = '';
      initialState.email = '';
      initialState.userName = '';
      initialState.password = '';
    },
    addFacebookToken: (initialState, payload) => {
      initialState.idUser = payload.payload.id;
      initialState.userName = payload.payload.name;
    },
    rememberUser: (initialState, payload) => {
      const keys = Object.keys(initialState.rememberedUsers);
      if (!keys.includes(payload.payload.email)) {
        initialState.rememberedUsers[payload.payload.email] = payload.payload;
      }
    },
  },
});
export const {
  saveUser,
  logOut,
  addFacebookToken,
  saveEnteredInfo,
  rememberUser,
} = slice.actions;
export default slice.reducer;
