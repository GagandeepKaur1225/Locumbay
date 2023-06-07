import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { style } from './style';
import { useSelector } from 'react-redux';

const CustomTooltip = ({ ...props }) => {
  const rememberedUsersData = useSelector(
    data => data.userInfo.rememberedUsers,
  );
  const keysRemembered = Object.keys(rememberedUsersData);
  const itemView = ({ index, item }) => {
    console.log(item, 'item is');
    return (
      <TouchableOpacity
        onPress={() => {
          props?.setEmail(item);
          console.log('item pressed');
          props?.closeToolTip();
        }}
        hitSlop={{
          top: 10,
          left: 60,
          bottom: 10,
          right: 60,
        }}
      >
        <Text style={style.itemViewList}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={style.triangle} />
      <View>
        <FlatList
          style={style.listView}
          data={props?.data}
          keyExtractor={(_, index) => {
            index.toString();
          }}
          renderItem={itemView}
        />
      </View>
    </View>
  );
};

export default CustomTooltip;
