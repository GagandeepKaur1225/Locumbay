import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import { style } from './style';

const CustomInput = ({ ...props }) => {
  const [focused, setFocused] = useState();
  const [ShowPass, setShowPass] = useState();
  return (
    <View style={style.mainView}>
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
          style={style.textInputField}
          onChangeText={props.onChangeText}
          secureTextEntry={
            props.header === 'Email' ? false : ShowPass ? false : true
          }
        />
        <View style={style.image}>
          <TouchableOpacity
            disabled={props?.header === 'Email' ? true : false}
            onPress={() => {
              setShowPass(prev => !prev);
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
