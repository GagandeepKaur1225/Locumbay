import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Constants } from '../../shared/constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  mainView: { flex: 1, padding: '2%' },
  textLogin: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: RFValue(Constants.HEADINGS.MAIN),
    marginTop: heightPercentageToDP('4%'),
    color: Constants.COLORS.primary,
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
  },
  forgotPassText: {
    fontWeight: '600',
    color: Constants.COLORS.primary,
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
    backgroundColor: Constants.COLORS.buttonColor,
  },
  loginText: {
    color: Constants.COLORS.white,
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
    color: Constants.COLORS.primary,
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
  remembrMe: { color: Constants.COLORS.primary, alignSelf: 'center' },
  resetPasswordView: { flexDirection: 'row', alignSelf: 'center' },
});
