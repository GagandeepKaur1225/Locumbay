import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';

import Home from './Home';
import LoginScreen from '../screens/Login';
import MainNavigator from './Main';
import React from 'react';
import { Startup } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { useFlipper } from '@react-navigation/devtools';
import { useSelector } from 'react-redux';
import { useTheme } from '../hooks';

const Stack = createStackNavigator();
// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  const data = useSelector(data => data.userInfo);
  console.log(data, 'data in the application.js');
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      {data.idUser ? (
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
};
export default ApplicationNavigator;
