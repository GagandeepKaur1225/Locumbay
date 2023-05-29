import { Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Logo from '../../assets/images/iconMain.svg';
import React from 'react';
import Remember from '../../assets/images/Checkbox.svg';
import { style } from './style';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={style.logo}>
        <Logo />
      </View>
      <View>
        <Text style={style.textLogin}>Login</Text>
      </View>
      <View>
        <View style={{ marginBottom: '8%' }}>
          <CustomInput placeholder="Enter email" header="Email" />
        </View>
        <View style={{ marginBottom: '8%' }}>
          <CustomInput placeholder="Enter Password" header="Password" />
        </View>
      </View>
      <View style={style.forgotPass}>
        <View style={style.rememberMe}>
          <Remember />
          <Text>Remember me</Text>
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
        <CustomButton title="Google" />
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
    </View>
  );
};

export default LoginScreen;
