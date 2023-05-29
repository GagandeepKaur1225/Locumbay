import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import UserLogo from '../../assets/images/user.svg';
import { style } from './style';

const CustomInput = ({ ...props }) => {
  const [focused, setFocused] = useState();
  return (
    <View style={{ alignSelf: 'center' }}>
      <Text>{props?.header}</Text>
      <View
        style={
          focused
            ? [style.textInput, { borderColor: '#87CEEB' }]
            : style.textInput
        }
      >
        <TextInput
          placeholder={props.placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ width: '88%' }}
          onChangeText={props.onChangeText}
        />
        <View style={{ alignSelf: 'center', marginRight: 15 }}>
          <UserLogo />
        </View>
      </View>
    </View>
  );
};

export default CustomInput;
