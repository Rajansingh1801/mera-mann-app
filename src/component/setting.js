import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Setting = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    LibreBaskerville_Bold: require("../../assets/font/LibreBaskerville-Bold.ttf"),
    Kalam_Bold: require("../../assets/font/Kalam-Bold.ttf"),
    kalam_regular: require("../../assets/font/Kalam-Regular.ttf"),
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
    <SafeAreaView style={styles.container}>
      <View style={styles.imgcont}>
        <Image
          source={require("../../assets/images/person/rajan.png")}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.nametxt}>Hii Raj</Text>
      </View>
      <View style={styles.btncont}>
        <TouchableOpacity style={styles.btn}>
          <MaterialCommunityIcons
            name="account"
            size={18}
            style={styles.icon}
          />
          <Text style={styles.txt}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <MaterialCommunityIcons name="bell" size={18} style={styles.icon} />
          <Text style={styles.txt}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <MaterialCommunityIcons
            name="content-save"
            size={18}
            style={styles.icon}
          />
          <Text style={styles.txt}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <MaterialCommunityIcons
            name="clock-time-five"
            size={18}
            style={styles.icon}
          />
          <Text style={styles.txt}>Your Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <MaterialCommunityIcons
            name="information"
            size={18}
            style={styles.icon}
          />
          <Text style={styles.txt}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <MaterialCommunityIcons name="shield" size={18} style={styles.icon} />
          <Text style={styles.txt}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          // onPress={() => navigation.naviagte("Login")}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialCommunityIcons name="logout" size={18} style={styles.icon} />
          <Text style={styles.txt}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b9eae1",
    paddingTop: 40,
    flex: 1,
  },
  imgcont: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  btncont: { marginHorizontal: 10, marginTop: 12 },
  btn: {
    backgroundColor: "#413839",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { color: "white", paddingRight: 10 },
  txt: { fontSize: 18, color: "white", fontFamily: "kalam_regular" },
  nametxt: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 14,
    color: "#00425A",
    fontFamily: "LibreBaskerville_Bold",
    // fontFamily: "kalam",
  },
});
