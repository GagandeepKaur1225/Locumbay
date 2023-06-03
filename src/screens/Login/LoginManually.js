import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import CheckBox from 'react-native-check-box';
import { Constants } from '../../shared/constants';
import CustomInput from '../../components/CustomInput';
import HidePass from '../../assets/images/hide_pwd_icon.svg';
import ShowPass from '../../assets/images/passShow.svg';
import UserLogo from '../../assets/images/user.svg';
import { saveEnteredInfo } from '../../store/userInfo';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useSignInMutation } from '../../services/modules/users';

const LoginManually = () => {
  const [signIn, { data, error }] = useSignInMutation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [check, setCheck] = useState(false);

  const checkMail = data => {
    const reg = Constants.REGEX.EMAIL_REGEX;
    if (data.length === 0) {
      setEmail('');
      setEmailErr('');
    } else if (reg.test(data) !== true) {
      setEmailErr(Constants.ERRORS.EMAIL_ERROR);
    } else {
      setEmail(data);
      setEmailErr('');
    }
  };

  const checkPassword = data => {
    const reg = Constants.REGEX.PASSWORD_REGEX;
    if (data.length === 0) {
      setPass('');
      setPassErr('');
    } else if (reg.test(data) !== true) {
      setPassErr(Constants.ERRORS.PASSWORD_ERROR);
    } else {
      setPass(data);
      setPassErr('');
    }
  };

  const handleLogin = () => {
    if (!emailErr && !passErr) {
      if (check) {
        dispatch(saveEnteredInfo({ email, pass }));
      }
      handleApi();
    } else {
      Alert.alert('Enter details correctly');
    }
  };

  const handleApi = () => {
    try {
      signIn({ Email: email, Password: pass })
        .then(res => {
          console.log(res, 'showing response');
          if (res.data.status) {
            navigation.navigate('Home');
          }
        })
        .catch(err => {
          console.log('we got error');
          console.log(err);
        });
      console.log('function ran');
    } catch {
      console.log('error observed');
    }
  };

  return (
    <>
      <View>
        <CustomInput
          placeholder="Enter email"
          header="Email"
          logo={<UserLogo />}
          onChangeText={checkMail}
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
          onChangeText={checkPassword}
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
              setCheck(prev => !prev);
            }}
            isChecked={check}
            checkedCheckBoxColor="#6AAF56"
            uncheckedCheckBoxColor="#6AAF56"
          />
          <Text style={style.remembrMe}>
            {Constants.LoginManually.REMEMBER_ME}
          </Text>
        </View>
        <View style={style.resetPasswordView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Constants.Screens.RESETPASSWORD);
            }}
            hitSlop={{
              top: 5,
              left: 20,
              bottom: 8,
              right: 20,
            }}
          >
            <Text style={style.forgotPassText}>
              {Constants.LoginManually.FORGOT_PASSWORD_CHECK}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={style.loginButton}
        onPress={() => handleLogin()}
        disabled={email && pass ? false : true}
      >
        <Text style={style.loginText}>{Constants.Login.LOGINTEXT}</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginManually;
