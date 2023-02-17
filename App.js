// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabnav from "./src/route/tabnav";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import Link from "./src/route/link";

export default function App() {
  const [fontsLoaded] = useFonts({
    Kalam_Bold: require("./assets/font/Kalam-Bold.ttf"),
    LibreBaskerville_Bold: require("./assets/font/LibreBaskerville-Bold.ttf"),
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
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#b9eae1"
        translucent={true}
      />
      {/* <Tabnav /> */}
      <Link />
    </NavigationContainer>
  );
}
