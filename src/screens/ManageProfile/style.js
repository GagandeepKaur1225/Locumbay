import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Constants } from '../../shared/constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  headingStyle: {
    alignSelf: 'center',
    padding: heightPercentageToDP('2%'),
  },
  headingText: {
    fontSize: RFValue(24),
    fontWeight: 700,
  },
  imageView: {
    alignSelf: 'center',
  },
  saveButton: {
    alignSelf: 'center',
    height: heightPercentageToDP('8%'),
    justifyContent: 'space-evenly',
    width: widthPercentageToDP('42%'),
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Constants.COLORS.primary,
    flexDirection: 'row',
    backgroundColor: Constants.COLORS.primary,
    marginTop: heightPercentageToDP('7%'),
  },
  error: { color: 'red', left: widthPercentageToDP('5%') },
});
