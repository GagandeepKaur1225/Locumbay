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
});
