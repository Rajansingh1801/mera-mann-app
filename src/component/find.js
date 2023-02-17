import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { userData } from "../api/userdata";
const Find = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_head}>Friends list</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name or Email Id "
        keyboardType="ascii-capable"
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={userData}
        scrollEnabled={true}
        renderItem={({ item }) => {
          return (
            <>
              <View
                style={{
                  marginTop: 15,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                  borderRadius: 40,
                  borderBottomColor: "brown",
                  borderWidth: 2,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={item.profilePicture}
                    resizeMode="contain"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      marginEnd: 20,
                    }}
                    alt="img"
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      // fontWeight: "800",
                      color: "black",
                      fontFamily: "LibreBaskerville_Bold",
                    }}
                  >
                    {item.userName}
                  </Text>
                </View>
              </View>
            </>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default Find;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#b9eae1",
    paddingHorizontal: 20,
    paddingBottom: 110,
  },
  text_head: {
    fontSize: 32,
    // fontWeight: "900",
    color: "brown",
    elevation: 15,
    textShadowColor: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textTransform: "uppercase",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "LibreBaskerville_Bold",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 8,
    borderRadius: 30,
    height: 50,
    fontWeight: "600",
    alignItems: "center",
    color: "black",
    borderWidth: 2,
    borderColor: "brown",
  },
});
