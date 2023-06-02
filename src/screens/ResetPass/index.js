import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

const ResetPass = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [emailErr, setEmailErr] = useState();
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

  return (
    <KeyboardAwareScrollView style={{ flex: 1, padding: 20 }}>
      <View>
        <Text style={style.textLogin}>Forgot Password</Text>
        <Text style={{ color: '#104651', alignSelf: 'center' }}>
          Enter the email to recover the password
        </Text>
      </View>
      <View>
        <CustomInput
          placeholder="Enter here..."
          header="Email"
          onChangeText={data => checkMail(data)}
        />
        {emailErr ? <Text style={style.errorMail}>{emailErr}</Text> : null}
        <TouchableOpacity style={style.sendButton}>
          <Text style={style.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: 'center' }}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={style.loginButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ResetPass;
