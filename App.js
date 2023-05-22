import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text, View, Image } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigations/Tabs";

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

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
