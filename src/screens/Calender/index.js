import { Agenda, Calendar, CalendarList } from 'react-native-calendars';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { CalendarProvider } from 'react-native-calendars';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { heightToDP } from 'react-native-responsive-screens';
import { set } from 'react-native-reanimated';

const CalendarScreen = () => {
  const [selected, setSelected] = useState('');
  return (
    <View>
      <Text>Calender screen</Text>
    </View>
  );
};

export default CalendarScreen;
