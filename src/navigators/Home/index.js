import { Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const LogOutGoogle = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('LOGGED OUT'); // Remember to remove the user from your app's state as well
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error(error);
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
      <TouchableOpacity style={style.buttonStyle}>
        <Text style={{ color: '#fff' }}>Sign Out from Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
