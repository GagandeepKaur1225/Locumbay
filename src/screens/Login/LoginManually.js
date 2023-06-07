import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ActivityIndicator } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Constants } from '../../shared/constants';
import CustomInput from '../../components/CustomInput';
import CustomModal from '../../components/customModal';
import HidePass from '../../assets/images/hide_pwd_icon.svg';
import ShowPass from '../../assets/images/passShow.svg';
import UserLogo from '../../assets/images/user.svg';
import { rememberUserInfo } from '../../store/rememberedUsers';
import { saveEnteredInfo } from '../../store/userInfo';
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
  const [dataModal, setDataModal] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
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
    if (!data) {
      setPass('');
      setPassErr('');
    } else if (reg.test(data) !== true) {
      setPass(data);
      setPassErr(Constants.ERRORS.PASSWORD_ERROR);
    } else {
      setPass(data);
      setPassErr('');
    }
  };

  const handleLogin = () => {
    if (email && pass && !emailErr && !passErr) {
      setIndicator(true);
      if (check) {
        // dispatch(rememberUser({ email, pass }));
        dispatch(rememberUserInfo({ email, pass }));
      }
      handleApi();
    } else if (!email && !pass) {
      setEmailErr(Constants.ERRORS.ENTER_MAIL);
      setPassErr(Constants.ERRORS.ENTER_PASSWORD);
    } else if (pass && !email) {
      if (!passErr) {
        setEmailErr(Constants.ERRORS.ENTER_MAIL);
        setPassErr('');
      } else {
        setEmailErr(Constants.ERRORS.ENTER_MAIL);
        setPassErr(Constants.ERRORS.PASSWORD_ERROR);
      }
    } else if (email && !pass) {
      if (!emailErr) {
        setPassErr(Constants.ERRORS.ENTER_PASSWORD);
        setEmailErr('');
      } else {
        setPassErr(Constants.ERRORS.ENTER_PASSWORD);
        setEmailErr(Constants.ERRORS.EMAIL_ERROR);
      }
    } else if (emailErr && passErr) {
      setEmailErr(Constants.ERRORS.EMAIL_ERROR);
      setPassErr(Constants.ERRORS.PASSWORD_ERROR);
    } else {
      console.log('error');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleApi = () => {
    try {
      signIn({ Email: email, Password: pass })
        .then(res => {
          console.log(res, 'response of api');
          const userName = res?.data?.data?.username;
          const userId = res?.data?.data?.user_id;
          console.log(userName, userId, 'INFO OF THE USER IS');
          if (res?.data?.status) {
            console.log('in if');
            dispatch(saveEnteredInfo({ email, pass, userName, userId }));
            setDataModal('done');
            setModalVisible(true);
            setIndicator(false);
            navigation.navigate(Constants.Screens.HOME, { method: 'manual' });
          } else {
            setDataModal(res?.error?.data?.message);
            setModalVisible(true);
            setIndicator(false);
          }
        })
        .catch(err => {
          console.log(err);
          setIndicator(false);
          setDataModal('Something went wrong');
          setModalVisible(true);
        });
    } catch {
      console.log('error observed');
      setDataModal('Error in fetching data');
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
    checkMail(data);
  };

  return (
    <>
      <View
        accessible={true}
        onStartShouldSetResponder={() => setToolTip(false)}
      >
        <View style={{ zIndex: 1 }}>
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
            {/* {tooltip && (
              <CustomTooltip
                setEmail={setEmailToolTip}
                closeToolTip={closeTooltip}
              />
            )} */}
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
              {/* {email && pass && !emailErr && !passErr ? ( */}
              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  style={{
                    borderColor: Constants.COLORS.textColorMain,
                    opacity: email && pass && !emailErr && !passErr ? 1.5 : 0.5,
                  }}
                  onClick={() => {
                    setCheck(prev => !prev);
                  }}
                  isChecked={
                    email && pass && !emailErr && !passErr ? check : false
                  }
                  checkedCheckBoxColor={Constants.COLORS.primary}
                  uncheckedCheckBoxColor={Constants.COLORS.primary}
                  disabled={
                    email && pass && !emailErr && !passErr ? false : true
                  }
                />
                <TouchableOpacity
                  onPress={() => setCheck(prev => !prev)}
                  style={{
                    justifyContent: 'center',
                  }}
                  activeOpacity={email && pass && !emailErr && !passErr ? 3 : 1}
                  disabled={
                    email && pass && !emailErr && !passErr ? false : true
                  }
                >
                  <Text style={style.remembrMe}>
                    {Constants.LoginManually.REMEMBER_ME}
                  </Text>
                </TouchableOpacity>
              </View>
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

        <TouchableOpacity
          style={style.loginButton}
          onPress={() => handleLogin()}
        >
          {indicator ? (
            <View>
              <ActivityIndicator
                size="large"
                animating={true}
                color={Constants.COLORS.white}
              />
            </View>
          ) : (
            <Text style={style.loginText}>{Constants.Login.LOGINTEXT}</Text>
          )}
        </TouchableOpacity>
      </View>
      <CustomModal
        visibleState={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        data={dataModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default LoginManually;
