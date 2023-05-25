import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({
  navigation: { navigate },
}) => (
  <StyledTouchableOpacity
    onPress={() => navigate("Stack", { screen: "screenOne" })}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <StyledText>Movies</StyledText>
  </StyledTouchableOpacity>
);

export default Movies;
