import { Platform, StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { RFValue } from 'react-native-responsive-fontsize';

export const style = StyleSheet.create({
  mainView: { flex: 1, padding: '2%' },
  textLogin: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: RFValue(22),
    marginTop: heightPercentageToDP('4%'),
    color: '#104651',
  },
  logo: { alignSelf: 'center', top: '2%' },
  forgotPass: {
    flexDirection: 'row',
    width: widthPercentageToDP('90%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '2%',
  },
  rememberMe: {
    flexDirection: 'row',
    width: '40%',
    // justifyContent: 'space-between',
  },
  forgotPassText: {
    fontWeight: '600',
    color: '#104651',
    alignSelf: 'center',
  },
  loginButton: {
    height: heightPercentageToDP('8%'),
    justifyContent: 'center',
    width: widthPercentageToDP('40%'),
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: heightPercentageToDP('2%'),
    backgroundColor: '#6AAF56',
  },
  loginText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: RFValue(22),
    padding: '1%',
  },
  socialButtons: {
    flexDirection: 'row',
    width: widthPercentageToDP('90%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  registerText: {
    color: '#104651',
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontSize: RFValue(18),
  },
  errorMail: {
    width: widthPercentageToDP('90%'),
    alignSelf: 'center',
    color: 'red',
  },
  Register: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '3%',
    marginBottom: '4%',
  },
  OR: { alignSelf: 'center', padding: '4%', fontSize: RFValue(20) },
  remembrMe: { color: '#104651', alignSelf: 'center' },
  resetPasswordView: { flexDirection: 'row', alignSelf: 'center' },
});
