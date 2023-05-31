import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import UserLogo from '../../assets/images/user.svg';
import { style } from './style';

const CustomInput = ({ ...props }) => {
  const [focused, setFocused] = useState();
  const [ShowPass, setShowPass] = useState();
  function showLogo() {
    if (props.header === 'Email') {
      if (ShowPass) {
        return props?.logo;
      } else {
        return props?.logoHidePass;
      }
    } else {
      return props.logo;
    }
  }
  return (
    <View style={{ alignSelf: 'center', padding: 20 }}>
      <Text style={style.headerStyle}>{props?.header}</Text>
      <Text />
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
          secureTextEntry={ShowPass ? false : true}
        />
        <View style={{ alignSelf: 'center', marginRight: 15 }}>
          <TouchableOpacity
            disabled={props?.header === 'Email' ? true : false}
            onPress={() => {
              setShowPass(prev => !prev);
              console.log(ShowPass, 'state for password');
            }}
            hitSlop={{
              top: 5,
              left: 20,
              bottom: 10,
              right: 20,
            }}
          >
            {props.header === 'Password'
              ? ShowPass
                ? props.logo
                : props.logoHidePass
              : props.logo}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomInput;
