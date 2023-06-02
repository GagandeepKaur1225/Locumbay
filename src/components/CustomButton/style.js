import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  socialButton: {
    height: heightPercentageToDP('8%'),
    justifyContent: 'space-evenly',
    width: widthPercentageToDP('42%'),
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: '5%',
    borderWidth: 2,
    borderColor: '#6AAF56',
    flexDirection: 'row',
  },
});
