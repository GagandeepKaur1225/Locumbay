import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Constants } from '../../shared/constants';
import CountryPicker from 'react-native-country-picker-modal';
import { TextInput } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { style } from './style.js';

const CustomNumberInput = ({ ...props }) => {
  const [focused, setFocused] = useState();
  const [countryPicker, setCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState('IN');
  const [country, setCountry] = useState(null);
  const [prefix, setPrefix] = useState('+91');
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(true);
  const onSelect = data => {
    console.log('pressed');
    setCountryPicker(false);
    setCountryCode(data?.cca2);
    setCountry(data?.name);
    console.log(data?.callingCode[0]);
    const codeNew = '+'.concat(data?.callingCode[0]);
    console.log(codeNew, 'new code is');
    setPrefix(codeNew);
  };
  return (
    <View style={style.mainView}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={style.headerStyle}>{props?.header}</Text>
        {props?.required ? (
          <Text style={{ color: Constants.COLORS.textColorMain }}>*</Text>
        ) : null}
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {
            <View
              style={{
                alignSelf: 'center',
                marginLeft: widthPercentageToDP('3%'),
              }}
            >
              <CountryPicker
                style={{
                  width: widthPercentageToDP('50%'),
                  height: heightPercentageToDP('40%'),
                }}
                countryCode={countryCode}
                withFilter={withFilter}
                withFlag={withFlag}
                withCountryNameButton={withCountryNameButton}
                withAlphaFilter={withAlphaFilter}
                withCallingCode={withCallingCode}
                withEmoji={withEmoji}
                onSelect={onSelect}
                visible={countryPicker}
              />
            </View>
          }
          <View style={style.image}>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={() => {
                setCountryPicker(prev => !prev);
              }}
              hitSlop={{
                top: 5,
                left: 20,
                bottom: 10,
                right: 20,
              }}
            >
              {props?.logo}
            </TouchableOpacity>
            <Text style={{ alignSelf: 'center', marginLeft: '3%' }}>
              {prefix}
            </Text>
            <TextInput
              placeholder={props?.placeholder}
              value={props?.value}
              keyboardType="numeric"
              maxLength={15}
              onFocus={() => {
                setFocused(true);
              }}
              onBlur={() => {
                setFocused(false);
              }}
              style={style.textInputField}
              onChangeText={props.onChangeText}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomNumberInput;
