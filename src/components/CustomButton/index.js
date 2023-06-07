import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from './style';

const CustomButton = ({ ...props }) => {
  return (
    <>
      <TouchableOpacity
        style={props?.style ? props.style : style.socialButton}
        onPress={() => props?.onClick()}
      >
        <View>{props?.logoSocial}</View>
        <Text
          style={{
            color: props?.style ? '#fff' : '#104651',
            fontWeight: '600',
            fontSize: RFValue(22),
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
