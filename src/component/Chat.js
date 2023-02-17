import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { userData } from "../api/userdata";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Chat = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 7,
        }}
      >
        <Text style={styles.nametxt}>message</Text>
        <TextInput
          placeholder="Search"
          keyboardType="ascii-capable"
          style={styles.input}
        />
      </View>
      <View style={{ paddingBottom: 120 }}>
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
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
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
                      <View>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "800",
                            color: "black",
                            fontFamily: "kalam_regular",
                          }}
                        >
                          {item.userName}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "900",
                            fontFamily: "Kalam_Bold",
                          }}
                        >
                          {item.message}
                        </Text>
                      </View>
                    </View>
                    <MaterialCommunityIcons
                      name="phone"
                      size={22}
                      style={{ marginEnd: 10 }}
                    />
                  </View>
                </View>
              </>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#b9eae1",
    paddingHorizontal: 20,
    paddingBottom: 110,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  nametxt: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 14,
    color: "#00425A",
    fontFamily: "LibreBaskerville_Bold",
    textTransform: "uppercase",
  },
});
