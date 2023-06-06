import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Constants } from '../../shared/constants';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  listView: {
    backgroundColor: Constants.COLORS.buttonColor,
    position: 'absolute',
    padding: 10,
    borderRadius: 8,
    left: widthPercentageToDP('47%'),
    transform: [{ translateX: -55 }],
    zIndex: 99,
  },
  itemViewList: {
    borderBottomWidth: 2,
    height: heightPercentageToDP('6%'),
    color: Constants.COLORS.white,
    borderBottomColor: Constants.COLORS.white,
    alignItems: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Constants.COLORS.buttonColor,
    left: widthPercentageToDP('52%'),
    transform: [{ translateX: -50 }],
    zIndex: 9999,
  },
});
