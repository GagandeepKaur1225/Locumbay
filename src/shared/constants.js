export const Constants = {
  SCREENS: {
    HOME: 'Home',
    LOGIN: 'LoginScreen',
    RESETPASSWORD: 'ResetPass',
    MANAGE_PROFILE: 'ManageProfile',
  },
  Login: {
    LOGINTEXT: 'Login',
    DONT_HAVE_ACCOUNT: "Don't have an account? ",
    REGISTER: ' Register Now',
    OR: 'Or',
  },
  RECOVERPASSWORD: {
    ENTER_MAIL: 'Enter the email to recover the password',
    FORGOT_PASSWORD: 'Forgot Password',
    SEND: 'Send',
  },
  LoginManually: {
    FORGOT_PASSWORD_CHECK: 'Forgot Password?',
    REMEMBER_ME: ' Remember me',
  },
  HOME_SCREEN: {
    SIGNOUT_GOOGLE: 'Sign Out from Google',
    SIGNOUT_FACEBOOK: 'Sign Out from Facebook',
    SIGNOUT_MANUAL: 'Sign OUT',
  },
  ERRORS: {
    EMAIL_ERROR: 'Enter valid mail',
    PASSWORD_ERROR:
      'Your password must be at least 8 characters long and include at least one capital letter, one small letter, one special character, and one number.',
    ENTER_PASSWORD: 'Password should not be empty',
    ENTER_MAIL: 'Email should not be empty',
    NUMBER_ERROR: 'Enter correct number',
  },
  REGEX: {
    EMAIL_REGEX:
      /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD_REGEX:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ !"#$%&'()*+,/:;<=>?@[\]^_`{|}~÷°¬±µ‰¤ƒ¥€£¢ß¿¡©®™§†‡—¶])(?=.{8,})/,
    NUMBER_REGEX: /^[0-9]+$/,
  },
  HEADINGS: {
    MAIN: 24,
    SUB_HEADING: 22,
    INPUT_FIELD_HEADING: 15,
  },
  COLORS: {
    primary: '#6AAF56',
    white: '#fff',
    textColorMain: '#104651',
    lightBlue: '#ECF5F6',
  },
  FORM_FIELDS: {
    FIRST_NAME: 'First Name',
    LAST_NAME: 'Last Name',
    PHONE_NUMBER: 'Phone Number',
    DOB: 'DOB',
    EMAIL_ADDRESS: 'Email Address',
    ADDRESS: 'Address',
    CITY: 'City',
    STATE: 'State',
    COUNTRY: 'Country',
    POST_CODE: 'Post Code',
  },
  PLACEHOLDERS: {
    ENTER_HERE: 'Enter here ...',
    SELECT: 'Select',
  },
  HEADING_TEXT: {
    MANAGE_PROFILE: 'Manage Profile',
  },
};
