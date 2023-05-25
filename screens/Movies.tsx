import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({
  navigation: { navigate },
}) => (
  <TouchableOpacity
    onPress={() => navigate("Stack", { screen: "screenOne" })}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Movies</Text>
  </TouchableOpacity>
);

export default Movies;
