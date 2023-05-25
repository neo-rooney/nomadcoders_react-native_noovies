import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Movies = ({ navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate("Stack", { screen: "screenOne" })}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Movies</Text>
  </TouchableOpacity>
);

export default Movies;
