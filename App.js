import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabnav from "./src/route/tabnav";
import { useCallback } from "react";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    LibreBaskerville_Bold: require("./assets/font/LibreBaskerville-Bold.ttf"),
    Kalam_Bold: require("./assets/font/Kalam-Bold.ttf"),
    kalam_regular: require("./assets/font/Kalam-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Tabnav />
    </NavigationContainer>
  );
}
