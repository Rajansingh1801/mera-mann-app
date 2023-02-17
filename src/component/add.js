import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  Image,
  View,
  Platform,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Add() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b9eae1",
      }}
    >
      <MaterialCommunityIcons
        name="camera-plus"
        size={80}
        style={{ color: "#3D1766" }}
      />
      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
        color="#13005A"
      />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      )}
      <View style={{ width: "100%", paddingHorizontal: 30 }}>
        <KeyboardAvoidingView behavior="position">
          <TextInput
            style={styles.input}
            placeholder="Write post content"
            keyboardType="ascii-capable"
            multiline={true}
            numberOfLines={3}
          />
          <Button title="Submit" color="#13005A" paddingHorizontal="300" />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    width: "100%",
    marginTop: 30,
    borderRadius: 5,
    padding: 5,
    borderColor: "brown",
    borderWidth: 2,
    marginBottom: 10,
  },
});
