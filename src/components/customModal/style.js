import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Constants } from '../../shared/constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  modalMain: {
    borderRadius: 8,
    top: heightPercentageToDP('25%'),
    height: heightPercentageToDP('40%'),
    width: widthPercentageToDP('80%'),
    backgroundColor: '#FFF',
    left: widthPercentageToDP('10%'),
    shadowColor: '#000',
    shadowOpacity: 2,
  },
  crossImage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: heightPercentageToDP('2%'),
  },
  oopsText: {
    fontSize: RFValue(20),
    color: 'red',
    alignSelf: 'center',
    padding: heightPercentageToDP('4%'),
  },
  message: {
    alignSelf: 'center',
    color: Constants.COLORS.textColorMain,
  },
  buttonStyle: {
    height: heightPercentageToDP('8%'),
    justifyContent: 'center',
    width: widthPercentageToDP('40%'),
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: heightPercentageToDP('2%'),
    backgroundColor: Constants.COLORS.buttonColor,
  },
});
