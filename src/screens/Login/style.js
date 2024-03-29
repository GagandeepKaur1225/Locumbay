import { Platform, StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { RFValue } from 'react-native-responsive-fontsize';

export const style = StyleSheet.create({
  textLogin: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: RFValue(22),
    marginTop: '12%',
    color: '#104651'
  },
  logo: { alignSelf: 'center', top: '5%' },
  forgotPass: {
    flexDirection: 'row',
    width: widthPercentageToDP('90%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  rememberMe: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
  forgotPassText: {
    fontWeight: '600',
    color: '#104651',
  },
  loginButton: {
    height: heightPercentageToDP('8%'),
    justifyContent: 'center',
    width: widthPercentageToDP('40%'),
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: '5%',
    backgroundColor: '#6AAF56',
  },
  loginText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: RFValue(24),
    padding: 5,
  },
  socialButtons: {
    flexDirection: 'row',
    width: widthPercentageToDP('88%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  registerText: {
    color: '#104651',
    fontWeight: '700',
    borderBottomWidth: 0.3,
  },
});
