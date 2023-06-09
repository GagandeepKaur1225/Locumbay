import { api } from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    signIn: build.mutation({
      query: ({ Email, Password }) => {
        const formData = new FormData();
        formData.append('email', Email);
        formData.append('password', Password);
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
        formData.append('email', email);
        return {
          url: 'auth/forgotpassword/',
          method: 'POST',
          body: formData,
        };
      },
    }),
    manageProfile: build.mutation({
      query: ({
        firstName,
        lastName,
        dob,
        phoneNumber,
        doc,
        password,
        address,
        country,
        state,
        city,
        photo,
        postalCode,
        jobAlert,
      }) => {
        const formData = new formData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('dob', dob);
        formData.append('phone_number', phoneNumber);
        formData.append('document', doc);
        formData.append('password', password);
        formData.append('address', address);
        formData.append('country', country);
        formData.append('state', state);
        formData.append('city', city);
        formData.append('postal_code', photo);
        formData.append('job_alert', jobAlert);
        return {
          url: 'user/profile/',
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
  overrideExisting: true,
});
export const { useSignInMutation, useRecoverPasswordMutation } = userApi;
