import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

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
    backgroundColor: '#6AAF56',
  },
});
