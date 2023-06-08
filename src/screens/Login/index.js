import {
  GoogleSignIn,
  facebookLoginPermissions,
  fetchFromFacebook,
} from '../../utilities/socialLogins';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { AccessToken } from 'react-native-fbsdk-next';
import { ActivityIndicator } from 'react-native';
import { Constants } from '../../shared/constants';
import CustomButton from '../../components/CustomButton';
import FacebookLogo from '../../assets/images/facebookLogo.svg';
import GoogleLogo from '../../assets/images/googleLogo.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginManually from './LoginManually';
import Logo from '../../assets/images/iconMain.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { addFacebookToken } from '../../store/userInfo';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [indicator, setIndicator] = useState(false);
  const facebookLogin = async () => {
    setIndicator(true);
    try {
      const result = await facebookLoginPermissions();
      if (!result.isCancelled) {
        const data = await AccessToken.getCurrentAccessToken();
        if (data) {
          console.log(data, 'data is');
          const response = await fetchFromFacebook(data);
          const userData = await response.json();
          console.log(userData, 'userData from facebook is:');
          dispatch(addFacebookToken(userData));
          setIndicator(false);
          navigation.navigate(Constants.SCREENS.HOME, { method: 'facebook' });
        }
      } else {
        setIndicator(false);
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
      {indicator ? (
        <View style={style.indicatorView}>
          <Text>{console.log(indicator)}</Text>
          <ActivityIndicator size="large" animating={true} />
        </View>
      ) : null}
      <View>
        <View style={style.logo}>
          <Logo />
        </View>
        <View>
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
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
