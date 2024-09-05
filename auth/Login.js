import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import React, { useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      // Get existing User from AsyncStorage
      const userData = await AsyncStorage.getItem("users");
      const users = userData ? JSON.parse(userData) : [];

      // Check if the Username or email already Exists
      const user = users.find(
        (user) =>
          (user.username === usernameOrEmail ||
           user.email === usernameOrEmail) && user.password === password
      );

      if (user) {
        Alert.alert('Sign in Successful!');
        navigation.replace("SecondScreen");
      } else {
        Alert.alert('Invalid Credentials');
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      Alert.alert('An error occurred during sign in');
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Username/Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={usernameOrEmail}
        onChangeText={setUsernameOrEmail} // Fixed onChange to onChangeText
        placeholderTextColor="#888"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword} // Fixed onChange to onChangeText
        placeholderTextColor="#888"
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Separator */}
      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separatorLine} />
      </View>

      {/* Login with Google */}
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../assets/Images/Google.png")}
          style={styles.socialButtonLogo}
        />
        <Text style={styles.socialButtonText}>Login with Google</Text>
      </TouchableOpacity>

      {/* Login with Facebook */}
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../assets/Images/Facebook.png")}
          style={styles.socialButtonLogo}
        />
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  socialButtonLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#021526",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 40,
    textAlign: "left",
    color: "white",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "white",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  signupText: {
    fontSize: 16,
    color: "#888",
  },
  signupButtonText: {
    fontSize: 16,
    color: "#007BFF",
    marginLeft: 5,
    fontWeight: "bold",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#888",
  },
  socialButton: {
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    borderColor: "#3498db",
    borderWidth: 1,
    justifyContent: "center",
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
