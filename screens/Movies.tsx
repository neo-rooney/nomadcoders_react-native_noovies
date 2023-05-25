import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: papayawhip;
`;

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({
  navigation: { navigate },
}) => (
  <StyledTouchableOpacity
    onPress={() => navigate("Stack", { screen: "screenOne" })}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Movies</Text>
  </StyledTouchableOpacity>
);

export default Movies;
