import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Constants } from '../../shared/constants';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager } from 'react-native-fbsdk-next';
import { RFValue } from 'react-native-responsive-fontsize';
import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { logOut } from '../../store/userInfo';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

const Home = ({ route }) => {
  const info = useSelector(data => data);
  console.log(info, 'store data');
  console.log(info?.remembereduserInfo, 'information of remembered user');
  console.log(info?.userInfo, 'information of logged in user');
  const dispatch = useDispatch();
  const dataNavigation = route?.params?.method;
  console.log(dataNavigation?.method, 'data from navigation');
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

  const logOutManual = () => {
    dispatch(logOut());
    navigation.navigate(Constants.Screens.LOGIN);
  };
  return (
    <View style={style.mainView}>
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={
          dataNavigation === 'google'
            ? LogOutGoogle
            : dataNavigation === 'facebook'
            ? logOutFacebook
            : logOutManual
        }
      >
        <Text style={style.buttonText}>
          {dataNavigation === 'google' ? (
            <Text style={style.buttonText}>
              {Constants.HOME_SCREEN.SIGNOUT_GOOGLE}
            </Text>
          ) : dataNavigation === 'facebook' ? (
            <Text style={style.buttonText}>
              {Constants.HOME_SCREEN.SIGNOUT_FACEBOOK}
            </Text>
          ) : (
            <Text style={style.buttonText}>
              {Constants.HOME_SCREEN.SIGNOUT_MANUAL}
            </Text>
          )}
          {/* {<Text>Constants.HOME_SCREEN.SIGNOUT_GOOGLE</Text>} */}
        </Text>
      </TouchableOpacity>
      <Text />
      {/* <TouchableOpacity style={style.buttonStyle} onPress={logOutFacebook}>
        <Text style={style.buttonText}>
          {Constants.HOME_SCREEN.SIGNOUT_FACEBOOK}
        </Text>
      </TouchableOpacity> */}
      <Text
        style={{
          alignSelf: 'center',
          fontSize: RFValue(25),
          top: heightPercentageToDP('30%'),
        }}
      >
        WELCOME!!
      </Text>
    </View>
  );
};

export default Home;
