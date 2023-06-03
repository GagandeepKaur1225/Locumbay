import {
  GoogleSignIn,
  facebookLoginPermissions,
  fetchFromFacebook,
} from '../../utilities/functions';
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
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const facebookLogin = async () => {
    try {
      const result = await facebookLoginPermissions();
      if (!result.isCancelled) {
        const data = await AccessToken.getCurrentAccessToken();
        if (data) {
          const response = await fetchFromFacebook();
          const userData = await response.json();
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
          onClick={GoogleSignIn()}
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
