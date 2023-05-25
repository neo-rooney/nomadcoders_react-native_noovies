import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Stack from "./Stack";

const NativeStack = createNativeStackNavigator();

const Nav = () => (
  <NativeStack.Navigator
    screenOptions={{
      presentation: "modal",
      headerShown: false,
    }}
  >
    <NativeStack.Screen name="Tabs" component={Tabs} />
    <NativeStack.Screen name="Stack" component={Stack} />
  </NativeStack.Navigator>
);

export default Nav;
