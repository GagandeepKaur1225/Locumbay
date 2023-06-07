import { Modal, Text, TouchableOpacity, View } from 'react-native';

import CrossSVG from '../../assets/images/CrossSVG.svg';
import CustomButton from '../CustomButton';
import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { style } from './style';

const CustomModal = ({ ...props }) => {
  console.log(props?.visibleState, 'state of modal');
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props?.visibleState}
      onRequestClose={props?.onRequestClose}
    >
      <View style={style.modalMain}>
        <TouchableOpacity
          style={style.crossImage}
          onPress={() => props?.onRequestClose()}
        >
          <CrossSVG />
        </TouchableOpacity>
        <Text style={style.oopsText}>OOPS!</Text>
        <Text style={style.message}>{props?.data}</Text>
        {/* <CustomButton
          style={style.buttonStyle}
          title="OK"
          onClick={props?.onRequestClose}
        /> */}
      </View>
    </Modal>
  );
};

export default CustomModal;
