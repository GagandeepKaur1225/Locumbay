import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import CheckBox from 'react-native-check-box';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import HidePass from '../../assets/images/hide_pwd_icon.svg';
import Logo from '../../assets/images/iconMain.svg';
import Remember from '../../assets/images/Checkbox.svg';
import ShowPass from '../../assets/images/passShow.svg';
import UserLogo from '../../assets/images/user.svg';
import { saveUser } from '../../store/userInfo';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, 'user info required is');
      dispatch(saveUser(userInfo));
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={style.logo}>
        <Logo />
      </View>
      <View>
        <Text style={style.textLogin}>Login</Text>
      </View>
      <View>
        <View>
          <CustomInput
            placeholder="Enter email"
            header="Email"
            logo={<UserLogo />}
          />
        </View>
        <View>
          <CustomInput
            placeholder="Enter Password"
            header="Password"
            logo={<ShowPass />}
            logoHidePass={<HidePass />}
          />
        </View>
      </View>
      <View style={style.forgotPass}>
        <View style={style.rememberMe}>
          <CheckBox
            style={{ borderColor: '#104651' }}
            onClick={() => console.log('checkbox pressed')}
          />
          <Text style={{ color: '#104651' }}>Remember me</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={style.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={style.loginButton}>
        <Text style={style.loginText}>Login</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ alignSelf: 'center', padding: 10 }}>Or</Text>
      </View>
      <View style={style.socialButtons}>
        <CustomButton title="Google" onClick={() => signIn()} />
        <CustomButton title="Facebook" />
      </View>
      <View
        style={{ flexDirection: 'row', alignSelf: 'center', marginTop: '3%' }}
      >
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={style.registerText}> Register Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
