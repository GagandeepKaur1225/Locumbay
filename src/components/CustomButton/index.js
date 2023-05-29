import { Text, View } from 'react-native';

import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from './style';

const CustomButton = ({ ...props }) => {
  return (
    <>
      <TouchableOpacity style={style.socialButton}>
        <Text style={{ color: '#104651', fontWeight: '600' }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
