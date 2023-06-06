import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { rememberUser, saveEnteredInfo } from '../../store/userInfo';

import { ActivityIndicator } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Constants } from '../../shared/constants';
import CustomInput from '../../components/CustomInput';
import CustomTooltip from '../../components/customTooltip';
import HidePass from '../../assets/images/hide_pwd_icon.svg';
import ShowPass from '../../assets/images/passShow.svg';
import Tooltip from 'react-native-walkthrough-tooltip';
import { TouchableWithoutFeedback } from 'react-native';
import UserLogo from '../../assets/images/user.svg';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useSignInMutation } from '../../services/modules/users';

const LoginManually = () => {
  const [signIn] = useSignInMutation();
  const [indicator, setIndicator] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [check, setCheck] = useState(false);
  const [tooltip, setToolTip] = useState(false);
  const checkMail = data => {
    const reg = Constants.REGEX.EMAIL_REGEX;
    if (data.length === 0) {
      setEmail('');
      setEmailErr('');
    } else if (reg.test(data) !== true) {
      setToolTip(false);
      setEmail(data);
      setEmailErr(Constants.ERRORS.EMAIL_ERROR);
    } else {
      setToolTip(false);
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
    setIndicator(true);
    if (!emailErr && !passErr) {
      if (check) {
        dispatch(rememberUser({ email, pass }));
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
          if (res.data.status) {
            console.log('in if');
            dispatch(saveEnteredInfo({ email, pass }));
            setIndicator(false);
            navigation.navigate(Constants.Screens.HOME);
          } else {
            Alert.alert(res.error.data.message);
            setIndicator(false);
          }
        })
        .catch(err => {
          console.log(err);
          setIndicator(false);
          Alert.alert('Something went wrong');
        });
    } catch {
      console.log('error observed');
    }
  };

  const setRemembered = data => {
    setEmail(data);
  };

  const openTooltip = () => {
    setToolTip(true);
  };

  const closeTooltip = () => {
    setToolTip(false);
  };

  const setEmailToolTip = data => {
    setEmail(data);
  };

  return (
    <>
      <View
        accessible={true}
        onStartShouldSetResponder={() => setToolTip(false)}
      >
        {indicator ? (
          <View style={{ height: heightPercentageToDP('60%') }}>
            <ActivityIndicator size="large" animating={true} />
          </View>
        ) : (
          <View
            style={{ zIndex: 1 }}
            onStartShouldSetResponder={() => console.log('You click by View')}
          >
            <View style={{ zIndex: 2 }}>
              <CustomInput
                placeholder="Enter email"
                header="Email"
                logo={<UserLogo />}
                onChangeText={checkMail}
                onSecureTextEntry={false}
                emailRemembered={setRemembered}
                openHint={openTooltip}
                closeHint={closeTooltip}
                value={email}
                setEmailToolTip={setEmailToolTip}
              />
              {emailErr.length !== 0 ? (
                <Text style={style.errorMail}>{emailErr}</Text>
              ) : null}
              {tooltip && (
                <CustomTooltip
                  setEmail={setEmailToolTip}
                  closeToolTip={closeTooltip}
                />
              )}
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
          </View>
        )}
        <TouchableOpacity
          style={style.loginButton}
          onPress={() => handleLogin()}
          disabled={email && pass ? false : true}
        >
          <Text style={style.loginText}>{Constants.Login.LOGINTEXT}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginManually;
