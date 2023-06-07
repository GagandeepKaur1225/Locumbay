import { Constants } from '../../shared/constants';
import Home from '../../navigators/Home';
import LoginScreen from '../../screens/Login';
import ResetPass from '../../screens/ResetPass';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export const Authentification = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Constants.Screens.HOME}
    >
      <Stack.Screen name={Constants.Screens.HOME} component={Home} />
      <Stack.Screen
        name={Constants.Screens.RESETPASSWORD}
        component={ResetPass}
      />
      <Stack.Screen name={Constants.Screens.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};
