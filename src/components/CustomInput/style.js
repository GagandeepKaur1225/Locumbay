import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Constants } from '../../shared/constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  textInput: {
    zIndex: 1,
    width: widthPercentageToDP('90%'),
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Constants.COLORS.lightBlue,
    borderColor: '#E8E8E8',
    paddingLeft: '1.5%',
    paddingRight: '3%',
  },
  headerStyle: {
    color: Constants.COLORS.textColorMain,
    fontSize: RFValue(Constants.HEADINGS.INPUT_FIELD_HEADING),
  },
  textInputField: { width: '88%', height: heightPercentageToDP('7%') },
  mainView: { alignSelf: 'center', paddingTop: heightPercentageToDP('5%') },
  image: { alignSelf: 'center', marginRight: '5%' },
});
