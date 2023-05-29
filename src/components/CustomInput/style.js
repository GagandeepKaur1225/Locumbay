import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  textInput: {
    width: widthPercentageToDP('85%'),
    borderWidth: 2,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 1,
  },
});
