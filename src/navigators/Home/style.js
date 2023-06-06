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
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: '5%',
    backgroundColor: Constants.COLORS.buttonColor,
  },
  mainView: { flex: 1, justifyContent: 'center' },
  buttonText: { color: Constants.COLORS.white },
});
