import { AccessToken, LoginManager, Settings } from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { addFacebookToken, saveUser } from '../../store/userInfo';

import CustomButton from '../../components/CustomButton';
import FacebookLogo from '../../assets/images/facebookLogo.svg';
import { FontSize } from '../../theme/Variables';
import GoogleLogo from '../../assets/images/googleLogo.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginManually from './LoginManually';
import Logo from '../../assets/images/iconMain.svg';
import { RFValue } from 'react-native-responsive-fontsize';
// import auth from '@react-native-firebase/auth';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    GoogleSignin.configure();
    Settings.initializeSDK();
  }, []);
  const signIn = async () => {
    try {
      console.log('in try of google sign in');
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, 'user info required is');
      dispatch(saveUser(userInfo));
      navigation.navigate('Home');
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
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        console.log('Login cancelled', result);
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        if (data) {
          console.log('Login successful', data.accessToken);
          const response = await fetch(
            `https://graph.facebook.com/v13.0/me?access_token=${data.accessToken}`,
          );
          const userData = await response.json();
          console.log('Facebook user data:', userData);
          dispatch(addFacebookToken(userData));
          navigation.navigate('Home');
        }
      }
    } catch (error) {
      console.log('Login error', error);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, padding:5 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={style.logo}>
        <Logo />
      </View>
      <View>
        <Text style={style.textLogin}>Login</Text>
      </View>
      <LoginManually />
      <View>
        <Text
          style={{ alignSelf: 'center', padding: 10, fontSize: RFValue(24) }}
        >
          Or
        </Text>
      </View>
      <View style={style.socialButtons}>
        <CustomButton
          title="Google"
          onClick={() => signIn()}
          logoSocial={<GoogleLogo />}
        />
        <CustomButton
          title="Facebook"
          logoSocial={<FacebookLogo />}
          onClick={() => facebookLogin()}
        />
      </View>
      <View style={style.Register}>
        <Text style={{ fontSize: RFValue(18) }}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={style.registerText}> Register Now</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
