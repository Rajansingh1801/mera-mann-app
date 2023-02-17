import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/log.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ width: "70%", paddingStart: 10 }}>
          <KeyboardAvoidingView>
            <TextInput
              placeholder="Enter Your Email Address"
              style={styles.input}
            />
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry={true}
              style={[styles.input, { marginTop: 8 }]}
            />
          </KeyboardAvoidingView>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("MainHome")}
            >
              <Text style={styles.txt}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
              style={styles.btn}
            >
              <Text style={styles.txt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#FBF4E9",
    borderBottomColor: "#181823",
    borderBottomWidth: 3,
    padding: 5,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    color: "black",
  },
  btn: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    alignSelf: "center",
    marginTop: 8,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "gray",
  },
  txt: {
    fontWeight: "600",
    color: "white",
  },
});
