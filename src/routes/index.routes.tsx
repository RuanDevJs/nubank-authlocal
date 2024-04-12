import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn"
    >
      <Stack.Screen component={SignIn} name="SignIn" />
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
}
