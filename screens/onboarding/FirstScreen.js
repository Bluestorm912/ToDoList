import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import SkipButton from "../../components/SkipButton";

const handleSkip = () => {
  navigation.navigate("Login");
};

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SkipButton />

      <View style={styles.img}>
        <Image source={require("../../assets/Images/onboarding1.png")} />
      </View>

      <View style={styles.circle}>
        <Icon name="circle" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
      </View>

      <View style={styles.text}>
        <Text
          style={{
            marginBottom: 40,
            marginTop: 30,
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Manage your tasks
        </Text>
        <View style={styles.text}>
          <Text
            style={{
              fontSize: 15,
              color: "rgba(247, 247, 247, 0.8)",
              textAlign: "center",
            }}
          >
            You can easily manage all of your daily tasks in ToDoList for free
          </Text>
        </View>
      </View>

      <View style={styles.butt}>
        <TouchableOpacity
          style={{
            backgroundColor: "#8875FF",
            borderRadius: 3,
            height: "40px",
            width: "40px",
          }}
          onPress={() => navigation.navigate("SecondScreen")}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "bold",
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ right: 250, bottom: 19 }}
          onPress={() => navigation.navigate("LogoScreen")}
        >
          <Text
            style={{
              fontSize: 16,
              color: "rgba(247, 247, 247, 0.4)",
              fontWeight: "bold",
            }}
          >
            BACK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#021526",
    height: "100%",
  },

  butt: {
    position: "absolute",
    bottom: 40,
    right: 30,
    padding: 10,
    backgroundColor: "transparent",
  },

  circle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 1,
  },

  img: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    marginTop: 100,
    marginBottom: 30,
  },

  text: {
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
});
