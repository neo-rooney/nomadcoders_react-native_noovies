import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Image, useColorScheme } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import Nav from "./navigations/Root";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./theme/styled";

const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

SplashScreen.preventAutoHideAsync();

export default function App() {
  const isDark = useColorScheme() === "dark";
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const fonts = loadFonts([Ionicons.font]);
        const images = loadImages([
          require("./my-image.png"),
          "https://docs.expo.dev/static/images/packages/expo-image.png",
        ]);
        await Promise.all([...fonts, ...images]);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) return null;

  return (
    <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </ThemeProvider>
  );
}
