import {
  Share,
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { userData } from "../api/userdata";
import Status from "./status";
const Home = () => {
  const [ispress, setPress] = useState(false);
  const [count, setCount] = useState(0);
  const [issave, setSaved] = useState(false);
  const pressSaved = () => {
    setSaved(!issave);
    if (!issave) {
      alert("Your Content is Saved");
    } else {
      alert("Your Content is unSaved");
    }
  };
  const onPress = () => {
    setPress(!ispress);
    if (count == 0) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  const shareData = async () => {
    try {
      await Share.share({
        message: "Share to your Friend",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 30 }}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.img_logo}
          resizeMode="contain"
        />
      </View>
      <Status />
      <FlatList
        data={userData}
        scrollEnabled={true}
        renderItem={({ item }) => {
          return (
            <View style={styles.postCont}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <Image
                  source={item.profilePicture}
                  style={styles.profile_img}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: "black",
                    paddingLeft: 10,
                    fontWeight: "700",
                    fontFamily: "LibreBaskerville_Bold",
                  }}
                >
                  {item.userName}
                </Text>
              </View>
              <Image source={item.photo} style={styles.main_img} />
              <View style={{ paddingVertical: 10, paddingHorizontal: 5 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="cards-heart"
                      size={26}
                      onPress={onPress}
                      style={{ color: ispress ? "red" : "black" }}
                    />
                    <MaterialCommunityIcons name="comment" size={22} />
                    <MaterialCommunityIcons
                      name="share"
                      onPress={shareData}
                      size={26}
                    />
                  </View>
                  <View>
                    <MaterialCommunityIcons
                      name="content-save-check"
                      size={26}
                      onPress={pressSaved}
                      style={{ color: issave ? "blue" : "black" }}
                    />
                  </View>
                </View>
                <Text style={{ fontFamily: "kalam_regular" }}>
                  {count} likes
                </Text>
                <Text style={{ fontFamily: "kalam_regular" }}>
                  {item.description}
                </Text>
                <Text style={{ fontSize: 8, fontFamily: "kalam_regular" }}>
                  {item.date} ago
                </Text>
              </View>
            </View>
          );
        }}
      ></FlatList>
      {/* <View>{myitem()}</View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b9eae1",
    paddingTop: 30,
    color: "white",
    overflow: "scroll",
    paddingBottom: 100,
  },
  img_logo: {
    width: "100%",
    height: 50,
    borderRadius: 50,
  },
  postCont: {
    marginHorizontal: 30,
    marginVertical: 20,
    backgroundColor: "white",
    // borderWidth: 2,
    borderRadius: 12,
    shadowOffset: 2,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: {
      height: 10,
    },
    shadowOpacity: 0.5,
  },
  profile_img: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  main_img: {
    width: "100%",
    height: 300,
  },
  normalbtn: { color: "gray" },
  pressbtn: {
    color: "red",
  },
});
