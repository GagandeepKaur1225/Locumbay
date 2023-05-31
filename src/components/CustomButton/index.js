import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from './style';

const CustomButton = ({ ...props }) => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, 'user info required is');
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
    <>
      <TouchableOpacity
        style={style.socialButton}
        onPress={() => props.onClick()}
      >
        <Text style={{ color: '#104651', fontWeight: '600' }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
