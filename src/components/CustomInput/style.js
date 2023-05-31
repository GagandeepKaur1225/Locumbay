import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  textInput: {
    width: widthPercentageToDP('90%'),
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ECF5F6',
    borderColor: '#E8E8E8',
    paddingLeft: 7,
    paddingRight: 7,
  },
  headerStyle: {
    color: '#104651',
  },
});
