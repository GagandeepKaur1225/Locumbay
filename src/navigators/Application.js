import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Authentification } from '../components/navigator/Authentification';
import { Constants } from '../shared/constants';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Guest } from '../components/navigator/Guest';
import Home from './Home';
import LoginScreen from '../screens/Login';
import ResetPass from '../screens/ResetPass';
import { Settings } from 'react-native-fbsdk-next';
import { createStackNavigator } from '@react-navigation/stack';
import { useFlipper } from '@react-navigation/devtools';
import { useSelector } from 'react-redux';
import { useTheme } from '../hooks';

const Stack = createStackNavigator();
// @refresh reset
//after login screens
// const Authentification = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{ headerShown: false }}
//       initialRouteName="Home"
//     >
//       <Stack.Screen name={Constants.Screens.HOME} component={Home} />
//       <Stack.Screen
//         name={Constants.Screens.RESETPASSWORD}
//         component={ResetPass}
//       />
//     </Stack.Navigator>
//   );
// };
//to login screen
// const Guest = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{ headerShown: false }}
//       initialRouteName="LoginScreen"
//     >
//       <Stack.Screen name={Constants.Screens.LOGIN} component={LoginScreen} />
//       <Stack.Screen name={Constants.Screens.HOME} component={Home} />
//       <Stack.Screen
//         name={Constants.Screens.RESETPASSWORD}
//         component={ResetPass}
//       />
//     </Stack.Navigator>
//   );
// };
const ApplicationNavigator = () => {
  useEffect(() => {
    GoogleSignin.configure();
    Settings.initializeSDK();
  }, []);
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  const data = useSelector(data => data.userInfo);
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: '#fff' }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar
          barStyle={darkMode ? 'light-content' : 'dark-content'}
          backgroundColor="#fff"
          translucent={false}
        />
        {data.idUser || data.email ? <Authentification /> : <Guest />}
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default ApplicationNavigator;
