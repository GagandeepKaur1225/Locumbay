import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { Constants } from '../../shared/constants';
import CustomInput from '../../components/CustomInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { useRecoverPasswordMutation } from '../../services/modules/users';

const ResetPass = () => {
  const [recoverPass] = useRecoverPasswordMutation();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [emailErr, setEmailErr] = useState('');
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

  const recoverPassword = () => {
    try {
      recoverPass({ email: email })
        .then(res => {
          Alert.alert(res.data.message);
        })
        .catch(err => console.log(err));
    } catch (err) {
      Alert.alert('Something went wrong');
    }
  };

  return (
    <KeyboardAwareScrollView style={style.mainView}>
      <View>
        <Text style={style.textLogin}>
          {Constants.RECOVERPASSWORD.FORGOT_PASSWORD}
        </Text>
        <Text style={style.mail}>{Constants.RECOVERPASSWORD.ENTER_MAIL}</Text>
      </View>
      <View>
        <CustomInput
          placeholder="Enter here..."
          header="Email"
          onChangeText={checkMail}
        />
        {emailErr ? <Text style={style.errorMail}>{emailErr}</Text> : null}
        <TouchableOpacity style={style.sendButton} onPress={recoverPassword}>
          <Text style={style.buttonText}>{Constants.RECOVERPASSWORD.SEND}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: 'center' }}
          onPress={() => navigation.navigate(Constants.Screens.LOGIN)}
          hitSlop={{
            top: 5,
            left: 20,
            bottom: 10,
            right: 20,
          }}
        >
          <Text style={style.loginButton}>{Constants.Login.LOGINTEXT}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ResetPass;
