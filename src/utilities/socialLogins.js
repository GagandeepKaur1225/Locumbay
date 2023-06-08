import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { Constants } from '../shared/constants';
import { LoginManager } from 'react-native-fbsdk-next';
import { saveUser } from '../store/userInfo';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export const facebookLoginPermissions = () => {
  return LoginManager.logInWithPermissions(['public_profile', 'email']);
};
export const fetchFromFacebook = props => {
  return fetch(
    `https://graph.facebook.com/v13.0/me?access_token=${props?.accessToken}`,
  );
};
export function GoogleSignIn() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return async function dataGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(saveUser(userInfo));
      navigation.navigate(Constants.SCREENS.HOME, { method: 'google' });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(' error ');
        // operation (e.g. sign in) is in progress already
        console.log('sign in in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available');
        // play services not available or outdated
      } else if (error) {
        console.log(error);
      } else {
        // some other error happened
        console.log('else');
      }
    }
  };
}
