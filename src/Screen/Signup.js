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

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/si.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ width: "60%", paddingEnd: 10 }}>
          <KeyboardAvoidingView>
            <TextInput
              placeholder="Enter Your Full Name"
              style={[styles.input, { marginTop: 8 }]}
            />
            <TextInput
              placeholder="Enter Your Email Address"
              style={[styles.input, { marginTop: 8 }]}
            />
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry={true}
              style={[styles.input, { marginTop: 8 }]}
            />
            <TextInput
              placeholder="Re-Enter Your Password"
              secureTextEntry={true}
              style={[styles.input, { marginTop: 8 }]}
            />
          </KeyboardAvoidingView>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.btn}
            >
              <Text style={styles.txt}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.txt}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  input: {
    backgroundColor: "#C7B8BF",
    borderBottomColor: "white",
    borderBottomWidth: 3,
    padding: 5,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    color: "black",
    // fontWeight: "900",
    color: "black",
    fontFamily: "LibreBaskerville_Bold",
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
