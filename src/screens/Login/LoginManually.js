import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import CheckBox from 'react-native-check-box';
import CustomInput from '../../components/CustomInput';
import HidePass from '../../assets/images/hide_pwd_icon.svg';
import Logo from '../../assets/images/iconMain.svg';
import ShowPass from '../../assets/images/passShow.svg';
import UserLogo from '../../assets/images/user.svg';
import { saveEnteredInfo } from '../../store/userInfo';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LoginManually = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [check, setCheck] = useState(false);

  const checkMail = data => {
    const reg =
      /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (data.length === 0) {
      setEmail('');
      setEmailErr('');
    } else if (reg.test(data) !== true) {
      setEmailErr('Enter valid mail');
      console.log('err', data);
    } else {
      setEmail(data);
      setEmailErr('');
      console.log('done with mail');
    }
  };

  const checkPassword = data => {
    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ !"#$%&'()*+,/:;<=>?@[\]^_`{|}~÷°¬±µ‰¤ƒ¥€£¢ß¿¡©®™§†‡—¶])(?=.{8,})/;
    if (data.length === 0) {
      setPass('');
      setPassErr('');
    } else if (reg.test(data) !== true) {
      setPassErr('Enter password in correct format');
    } else {
      setPass(data);
      setPassErr('');
    }
  };

  const handleLogin = () => {
    if (emailErr.length === 0 && passErr.length === 0) {
      if (check) {
        dispatch(saveEnteredInfo({ email, pass }));
        navigation.navigate('Home');
      } else {
        navigation.navigate('Home');
      }
    } else {
      Alert.alert('Enter details correctly');
    }
  };

  return (
    <View>
      <View>
        <CustomInput
          placeholder="Enter email"
          header="Email"
          logo={<UserLogo />}
          onChangeText={data => checkMail(data)}
          onSecureTextEntry={false}
        />
        {emailErr.length !== 0 ? (
          <Text style={style.errorMail}>{emailErr}</Text>
        ) : null}
      </View>
      <View>
        <CustomInput
          placeholder="Enter Password"
          header="Password"
          logo={<ShowPass />}
          logoHidePass={<HidePass />}
          onChangeText={data => checkPassword(data)}
        />
        {passErr.length !== 0 ? (
          <Text style={style.errorMail}>{passErr}</Text>
        ) : null}
      </View>
      <View style={style.forgotPass}>
        <View style={style.rememberMe}>
          <CheckBox
            style={{ borderColor: '#104651' }}
            onClick={() => {
              console.log('checkbox pressed');
              setCheck(prev => !prev);
            }}
            isChecked={check}
            checkedCheckBoxColor="#6AAF56"
            uncheckedCheckBoxColor="#6AAF56"
          />
          <Text style={{ color: '#104651', alignSelf: 'center' }}>
            Remember me
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ResetPass');
            }}
          >
            <Text style={style.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={style.loginButton}
        onPress={() => handleLogin()}
        disabled={email && pass ? false : true}
      >
        <Text style={style.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginManually;
