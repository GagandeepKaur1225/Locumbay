import { LoginManager } from 'react-native-fbsdk-next';

export const facebookLoginPermissions = () => {
  return LoginManager.logInWithPermissions(['public_profile', 'email']);
};
