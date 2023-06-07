import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Constants } from '../../shared/constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  mainView: { flex: 1, paddingBottom: '10%', paddingTop: '20%' },
  textLogin: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: RFValue(Constants.HEADINGS.MAIN),
    marginTop: '10%',
    color: Constants.COLORS.textColorMain,
    padding: '5%',
  },
  sendButton: {
    height: heightPercentageToDP('8%'),
    justifyContent: 'center',
    width: widthPercentageToDP('40%'),
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: '5%',
    backgroundColor: Constants.COLORS.primary,
  },
  buttonText: {
    color: Constants.COLORS.white,
    fontWeight: '600',
    fontSize: RFValue(22),
    padding: 5,
  },
  errorMail: {
    width: widthPercentageToDP('88%'),
    alignSelf: 'center',
    color: 'red',
  },
  loginButton: {
    color: Constants.COLORS.textColorMain,
    fontSize: RFValue(22),
    marginTop: heightPercentageToDP('5%'),
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  mail: {
    color: Constants.COLORS.textColorMain,
    alignSelf: 'center',
    fontWeight: '500',
  },
  alignCenter: {
    alignSelf: 'center',
  },
});
