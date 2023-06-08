import { Constants } from '../../shared/constants';
import Home from '../../navigators/Home';
import LoginScreen from '../../screens/Login';
import ManageProfile from '../../screens/ManageProfile';
import ResetPass from '../../screens/ResetPass';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export const Authentification = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Constants.SCREENS.HOME}
    >
      <Stack.Screen name={Constants.SCREENS.HOME} component={Home} />
      <Stack.Screen
        name={Constants.SCREENS.RESETPASSWORD}
        component={ResetPass}
      />
      <Stack.Screen name={Constants.SCREENS.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={Constants.SCREENS.MANAGE_PROFILE}
        component={ManageProfile}
      />
    </Stack.Navigator>
  );
};
