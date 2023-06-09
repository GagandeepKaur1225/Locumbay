import { Text, View } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from './style';

import React = require('react');

interface CustomButtonProps {
  title: string;
  style: object;
  onClick: () => void;
  logoSocial?: JSX.Element;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  style: buttonStyle,
  onClick,
  logoSocial,
}) => {
  return (
    <>
      <TouchableOpacity
        style={buttonStyle ? buttonStyle : style.socialButton}
        onPress={() => onClick()}
      >
        {logoSocial ? <View>{logoSocial}</View> : null}
        <Text
          style={{
            color: buttonStyle ? '#fff' : '#104651',
            fontWeight: '600',
            fontSize: RFValue(22),
            alignSelf: buttonStyle ? 'center' : 'auto',
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;

// import React, { useEffect } from 'react';
// import { Text, View } from 'react-native';

// import { RFValue } from 'react-native-responsive-fontsize';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { style } from './style';

// const CustomButton = ({ ...props }) => {
//   return (
//     <>
//       <TouchableOpacity
//         style={props?.style ? props.style : style.socialButton}
//         onPress={() => props?.onClick()}
//       >
//         {props?.logoSocial ? <View>{props?.logoSocial}</View> : null}
//          <Text
//           style={{
//             color: props?.style ? '#fff' : '#104651',
//             fontWeight: '600',
//             fontSize: RFValue(22),
//             alignSelf: props?.style ? 'center' : 'auto',
//           }}
//         >
//           {props.title}
//         </Text>
//       </TouchableOpacity>
//     </>
//   );
// };

// export default CustomButton;
