import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { TextInput } from 'react-native-gesture-handler';
import Tooltip from 'react-native-walkthrough-tooltip';
import { style } from './style';
import { useSelector } from 'react-redux';

const CustomInput = ({ ...props }) => {
  const [focused, setFocused] = useState();
  const [ShowPass, setShowPass] = useState();
  const [toolTip, setToolTip] = useState(false);
  const rememberedUsersData = useSelector(
    data => data.userInfo.rememberedUsers,
  );
  console.log(rememberedUsersData);
  const keysRemembered = Object.keys(rememberedUsersData);
  console.log(keysRemembered);
  const itemView = ({ index, item }) => {
    console.log(item, 'item is');
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <View style={style.mainView}>
      <Text style={style.headerStyle}>{props?.header}</Text>
      <Text />
      <Tooltip
        isVisible={toolTip}
        content={
          <FlatList
            data={keysRemembered}
            keyExtractor={(_, index) => {
              index.toString();
            }}
            renderItem={itemView}
          />
        }
        placement="bottom"
        onClose={() => setToolTip(prev => !prev)}
        disableShadow={false}
      >
        <View
          style={
            focused
              ? [style.textInput, { borderColor: '#87CEEB' }]
              : style.textInput
          }
        >
          <TextInput
            placeholder={props.placeholder}
            onFocus={() => {
              setFocused(true);
              setToolTip(true);
            }}
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
      </Tooltip>
    </View>
  );
};

export default CustomInput;
