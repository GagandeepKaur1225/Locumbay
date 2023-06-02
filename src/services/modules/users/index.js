import { api } from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    signIn: build.mutation({
      query: ({ Email, Password }) => {
        const formData = new FormData();
        formData.append('email', Email);
        formData.append('password', Password);
        console.log(formData, 'formdata is');
        return {
          url: 'auth/login/',
          method: 'POST',
          body: formData,
        };
      },
    }),
    recoverPassword: build.mutation({
      query: ({ email }) => {
        const formData = new FormData();
        console.log(email);
        formData.append('email', email);
        console.log(formData, 'formdata is');
        return {
          url: 'auth/forgotpassword/',
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
  overrideExisting: true,
});
export const { useSignInMutation, useRecoverPasswordMutation } = userApi;
