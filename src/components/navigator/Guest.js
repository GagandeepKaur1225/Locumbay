import { Constants } from '../../shared/constants';
import Home from '../../navigators/Home';
import LoginScreen from '../../screens/Login';
import ResetPass from '../../screens/ResetPass';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export const Guest = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Constants.SCREENS.LOGIN}
    >
      <Stack.Screen name={Constants.SCREENS.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Constants.SCREENS.HOME} component={Home} />
      <Stack.Screen
        name={Constants.SCREENS.RESETPASSWORD}
        component={ResetPass}
      />
    </Stack.Navigator>
  );
};
