import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const LogoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Images/Logo.png")} />

      <TouchableOpacity
        style={styles.but}
        onPress={() => navigation.navigate("FirstScreen")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>ToDoList</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#021526",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
