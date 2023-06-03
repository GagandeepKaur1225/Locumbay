import { Text, TouchableOpacity, View } from 'react-native';

import { Constants } from '../../shared/constants';
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
      dispatch(logOut());
      navigation.navigate(Constants.Screens.LOGIN);
    } catch (error) {
      console.error(error);
    }
  };

  const logOutFacebook = () => {
    try {
      LoginManager.logOut();
      dispatch(logOut());
      navigation.navigate(Constants.Screens.LOGIN);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={style.mainView}>
      <TouchableOpacity style={style.buttonStyle} onPress={LogOutGoogle}>
        <Text style={style.buttonText}>
          {Constants.HOME_SCREEN.SIGNOUT_GOOGLE}
        </Text>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity style={style.buttonStyle} onPress={logOutFacebook}>
        <Text style={style.buttonText}>
          {Constants.HOME_SCREEN.SIGNOUT_FACEBOOK}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
