import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Constants } from '../../shared/constants';
import { RFValue } from 'react-native-responsive-fontsize';
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
  manageProfileButton: {
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
  welcomeText: {
    alignSelf: 'center',
    fontSize: RFValue(25),
    marginTop: heightPercentageToDP('20%'),
  },
});
