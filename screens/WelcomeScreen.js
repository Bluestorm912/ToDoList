import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
         <View >
           
            <Icon marginTop={50} name="angle-left" color={"red"} size={30}  onPress={() => navigation.navigate('ThirdScreen')} />
          </View>
      <View>
        <Text
          style={{
          
            marginTop: 180,
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Welcome to ToDoList
        </Text>
      </View>
      <View>
        <Text
        style={{
          
            marginTop: 20,
            textAlign: "center",
            fontSize: 15,
            color: "white",
            paddingHorizontal: 40,
          }}>
          Please login to your account or create new account to continue
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>

      </View>

      
      <View style={styles.footer}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('Registration')}
          >
            <Text style={styles.buttonText}> CREATE ACCOUNT </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#021526",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  but: {
    backgroundColor: "gold",
    padding: "3%",
    marginTop: "15%",
  },
  footer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginButton: {
    flex: 1,
    backgroundColor: "#3498db",
    padding: 15,
    marginRight: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 290,
  },
  registerButton: {
    flex: 1,
    borderColor: "#3498db",
    borderWidth: 1,
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 50,
  },
});
