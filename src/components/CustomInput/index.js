import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Constants } from '../../shared/constants';
import { TextInput } from 'react-native-gesture-handler';
import { style } from './style';

const CustomInput = ({ ...props }) => {
  const [focused, setFocused] = useState();
  const [ShowPass, setShowPass] = useState();
  return (
    <View style={style.mainView}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={style.headerStyle}>{props?.header}</Text>
        {props?.required ? <Text style={style.requiredField}>*</Text> : null}
      </View>
      <Text />
      <View
        style={
          focused
            ? [
                style.textInput,
                {
                  borderColor: Constants.COLORS.textColorMain,
                  backgroundColor: Constants.COLORS.white,
                },
              ]
            : style.textInput
        }
      >
        <TextInput
          placeholder={props.placeholder}
          value={props?.value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          style={style.textInputField}
          onChangeText={props.onChangeText}
          secureTextEntry={
            props.header === 'Password' ? (ShowPass ? false : true) : false
          }
        />
        <View style={style.image}>
          <TouchableOpacity
            disabled={props?.header === 'Email' ? true : false}
            onPress={
              props?.header === 'Password'
                ? () => {
                    setShowPass(prev => !prev);
                  }
                : props?.onClick
            }
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
