import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";

const NativeStack = createNativeStackNavigator();

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("ScreenTwo")}>
    <Text>ScreenOne</Text>
  </TouchableOpacity>
);

const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("ScreenThree")}>
    <Text>ScreenTwo</Text>
  </TouchableOpacity>
);

const ScreenThree = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("ScreenOne")}>
    <Text>ScreenThree</Text>
  </TouchableOpacity>
);

const Stack = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen name="ScreenOne" component={ScreenOne} />
    <NativeStack.Screen name="ScreenTwo" component={ScreenTwo} />
    <NativeStack.Screen name="ScreenThree" component={ScreenThree} />
  </NativeStack.Navigator>
);

export default Stack;
