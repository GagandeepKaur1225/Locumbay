import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Text, TouchableOpacity, View } from 'react-native';
import { addFacebookToken, saveUser } from '../../store/userInfo';

import { AccessToken } from 'react-native-fbsdk-next';
import { Constants } from '../../shared/constants';
import CustomButton from '../../components/CustomButton';
import FacebookLogo from '../../assets/images/facebookLogo.svg';
import GoogleLogo from '../../assets/images/googleLogo.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginManually from './LoginManually';
import Logo from '../../assets/images/iconMain.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import React from 'react';
import { facebookLoginPermissions } from '../../utilities/functions';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, 'user info required is');
      dispatch(saveUser(userInfo));
      navigation.navigate(Constants.Screens.HOME);
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

  const facebookLogin = async () => {
    try {
      const result = await facebookLoginPermissions();
      if (!result.isCancelled) {
        const data = await AccessToken.getCurrentAccessToken();
        if (data) {
          const response = await fetch(
            `https://graph.facebook.com/v13.0/me?access_token=${data.accessToken}`,
          );
          const userData = await response.json();
          console.log('Facebook user data:', userData);
          dispatch(addFacebookToken(userData));
          navigation.navigate(Constants.Screens.HOME);
        }
      }
    } catch (error) {
      console.log('Login error', error);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={style.mainView}
      showsVerticalScrollIndicator={false}
    >
      <View style={style.logo}>
        <Logo />
      </View>
      <View>
        <Text style={style.textLogin}>{Constants.Login.LOGINTEXT}</Text>
      </View>
      <LoginManually />
      <View>
        <Text style={style.OR}>{Constants.Login.OR}</Text>
      </View>
      <View style={style.socialButtons}>
        <CustomButton
          title="Google"
          onClick={signIn}
          logoSocial={<GoogleLogo />}
        />
        <CustomButton
          title="Facebook"
          logoSocial={<FacebookLogo />}
          onClick={facebookLogin}
        />
      </View>
      <View style={style.Register}>
        <Text style={{ fontSize: RFValue(18) }}>
          {Constants.Login.DONT_HAVE_ACCOUNT}
        </Text>
        <TouchableOpacity>
          <Text style={style.registerText}>{Constants.Login.REGISTER}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
