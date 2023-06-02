import { Text, TouchableOpacity, View } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager } from 'react-native-fbsdk-next';
import React from 'react';
import { logOut } from '../../store/userInfo';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const LogOutGoogle = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('LOGGED OUT');
      dispatch(logOut());
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error(error);
    }
  };

  const logOutFacebook = () => {
    console.log('in logout function');
    try {
      console.log('in try block');
      LoginManager.logOut();
      dispatch(logOut());
      navigation.navigate('LoginScreen');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => LogOutGoogle()}
      >
        <Text style={{ color: '#fff' }}>Sign Out from Google</Text>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => logOutFacebook()}
      >
        <Text style={{ color: '#fff' }}>Sign Out from Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
