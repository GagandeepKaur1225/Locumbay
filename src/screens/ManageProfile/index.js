import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import CalenderSvg from '../../assets/images/calender.svg';
import ChooseImage from '../../assets/images/cameraGroup.svg';
import { Constants } from '../../shared/constants';
import CustomInput from '../../components/CustomInput';
import CustomNumberInput from '../../components/NumberInput';
import DatePicker from 'react-native-date-picker';
import DefaultImage from '../../assets/images/defaultImage.svg';
import DropDownSvg from '../../assets/images/dropDown.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native';
import { style } from './style';

const ManageProfile = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [mobNumber, setMobileNumber] = useState('');
  const [dateField, setDateField] = useState('mm/dd/yyyy');
  const [emailErr, setEmailErr] = useState('');
  const [nmbrErr, setNmbrErr] = useState('');
  const openModal = () => {
    setOpen(true);
  };

  const checkMail = data => {
    const reg = Constants.REGEX.EMAIL_REGEX;
    if (data.length === 0) {
      setEmail('');
      setEmailErr('');
    } else if (reg.test(data) !== true) {
      setEmail(data);
      setEmailErr(Constants.ERRORS.EMAIL_ERROR);
    } else {
      setEmail(data);
      setEmailErr('');
    }
  };

  const checkNumber = data => {
    const reg = Constants.REGEX.NUMBER_REGEX;
    if (data.length === 0) {
      setMobileNumber('');
      setNmbrErr('');
    } else if (reg.test(data) !== true) {
      setMobileNumber(data);
      setNmbrErr(Constants.ERRORS.EMAIL_ERROR);
    } else {
      setMobileNumber(data);
      setNmbrErr('');
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: heightPercentageToDP('2%') }}
      >
        <View style={style.headingStyle}>
          <Text style={style.headingText}>
            {Constants.HEADING_TEXT.MANAGE_PROFILE}
          </Text>
        </View>
        <View style={style.imageView}>
          <View>
            <DefaultImage />
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginTop: heightPercentageToDP('22%'),
              position: 'absolute',
            }}
          >
            <ChooseImage />
          </TouchableOpacity>
        </View>
        <View>
          <CustomInput
            header={Constants.FORM_FIELDS.FIRST_NAME}
            placeholder={Constants.PLACEHOLDERS.ENTER_HERE}
          />
          <CustomInput
            header={Constants.FORM_FIELDS.LAST_NAME}
            placeholder={Constants.PLACEHOLDERS.ENTER_HERE}
          />
          <CustomNumberInput
            header={Constants.FORM_FIELDS.PHONE_NUMBER}
            logo={<DropDownSvg />}
            value={mobNumber}
            onChangeText={checkNumber}
          />
          {nmbrErr ? (
            <Text style={{ color: 'red', left: widthPercentageToDP('5%') }}>
              {nmbrErr}
            </Text>
          ) : null}
          <CustomInput
            header={Constants.FORM_FIELDS.DOB}
            placeholder={Constants.PLACEHOLDERS.SELECT}
            logo={<CalenderSvg />}
            onClick={openModal}
            value={dateField}
          />
          <DatePicker
            modal
            open={open}
            mode="date"
            date={date}
            // locale='en-US'
            onConfirm={res => {
              setOpen(false);
              const dateIs = res.toLocaleDateString('en-US', {
                dateStyle: 'short',
              });
              setDate(res);
              setDateField(dateIs);
              console.log(
                res.toLocaleDateString('en-US', {
                  dateStyle: 'long',
                }),
                'response of date picker',
              );
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <CustomInput
            header={Constants.FORM_FIELDS.EMAIL_ADDRESS}
            placeholder={Constants.PLACEHOLDERS.ENTER_HERE}
            onChangeText={checkMail}
          />
          {emailErr ? (
            <Text style={{ color: 'red', left: widthPercentageToDP('5%') }}>
              {emailErr}
            </Text>
          ) : null}
          <CustomInput
            header={Constants.FORM_FIELDS.ADDRESS}
            placeholder={Constants.PLACEHOLDERS.ENTER_HERE}
          />
          <CustomInput
            header={Constants.FORM_FIELDS.COUNTRY}
            placeholder={Constants.PLACEHOLDERS.SELECT}
            logo={<DropDownSvg />}
          />
          <CustomInput
            header={Constants.FORM_FIELDS.STATE}
            placeholder={Constants.PLACEHOLDERS.SELECT}
            logo={<DropDownSvg />}
          />
          <CustomInput
            header={Constants.FORM_FIELDS.CITY}
            placeholder={Constants.PLACEHOLDERS.ENTER_HERE}
          />
          <CustomInput
            header={Constants.FORM_FIELDS.POST_CODE}
            placeholder={Constants.PLACEHOLDERS.ENTER_HERE}
          />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default ManageProfile;
