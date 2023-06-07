import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Constants } from '../../shared/constants';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  buttonStyle: {
    height: heightPercentageToDP('8%'),
    justifyContent: 'center',
    width: widthPercentageToDP('40%'),
    alignSelf: 'flex-end',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: '5%',
    backgroundColor: Constants.COLORS.primary,
  },
  mainView: { flex: 1 },
  buttonText: { color: Constants.COLORS.white },
});
