export const Constants = {
  Screens: {
    HOME: 'Home',
    LOGIN: 'LoginScreen',
    RESETPASSWORD: 'ResetPass',
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
  },
  ERRORS: {
    EMAIL_ERROR: 'Enter valid mail',
    PASSWORD_ERROR:
      'Your password must be at least 8 characters long and include at least one capital letter, one small letter, one special character, and one number.',
  },
  REGEX: {
    EMAIL_REGEX:
      /^(([^<>()\\.,;:s@"]+(.[^<>()\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
    PASSWORD_REGEX:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ !"#$%&'()*+,/:;<=>?@[\]^_`{|}~÷°¬±µ‰¤ƒ¥€£¢ß¿¡©®™§†‡—¶])(?=.{8,})/,
  },
  HEADINGS: {
    MAIN: 24,
    SUB_HEADING: 22,
    INPUT_FIELD_HEADING: 15,
  },
};
