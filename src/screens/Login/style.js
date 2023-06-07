import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Constants } from '../../shared/constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  mainView: { flex: 1, padding: heightPercentageToDP('1%') },
  textLogin: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: RFValue(Constants.HEADINGS.MAIN),
    marginTop: heightPercentageToDP('4%'),
    color: Constants.COLORS.textColorMain,
  },
  logo: { alignSelf: 'center', top: heightPercentageToDP('1%') },
  forgotPass: {
    flexDirection: 'row',
    width: widthPercentageToDP('90%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP('3%'),
  },
  rememberMe: {
    flexDirection: 'row',
    width: '40%',
  },
  forgotPassText: {
    fontWeight: '600',
    color: Constants.COLORS.textColorMain,
    alignSelf: 'center',
  },
  loginButton: {
    height: heightPercentageToDP('8%'),
    justifyContent: 'center',
    width: widthPercentageToDP('40%'),
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: heightPercentageToDP('6%'),
    marginBottom: heightPercentageToDP('4%'),
    backgroundColor: Constants.COLORS.primary,
  },
  loginText: {
    color: Constants.COLORS.white,
    fontWeight: '600',
    fontSize: RFValue(22),
    padding: heightPercentageToDP('0.5%'),
  },
  socialButtons: {
    flexDirection: 'row',
    width: widthPercentageToDP('90%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  registerText: {
    color: Constants.COLORS.textColorMain,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontSize: RFValue(18),
  },
  errorMail: {
    width: widthPercentageToDP('90%'),
    alignSelf: 'center',
    color: 'red',
    top: heightPercentageToDP('0.2%'),
  },
  Register: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: heightPercentageToDP('1%'),
    marginBottom: heightPercentageToDP('2%'),
  },
  OR: { alignSelf: 'center', padding: '4%', fontSize: RFValue(20) },
  remembrMe: { color: Constants.COLORS.textColorMain, alignSelf: 'center' },
  resetPasswordView: { flexDirection: 'row', alignSelf: 'center' },
  indicatorView: {
    zIndex: 99999,
    position: 'absolute',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
