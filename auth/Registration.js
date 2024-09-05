import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Registration() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleRegistration = async () => {
    if (!username || !email || !password) {
      Alert.alert('Please fill out all fields');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Please enter a valid email');
      return;
    }
    
    try {
      // Get existing users from AsyncStorage
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];

      // Check if the Username or Email already exists
      const userExists = users.some(user => user.username === username || user.email === email);

      if (userExists) {
        Alert.alert('Username or Email already exists');
      } else {
        // Add new user
        const newUser = { username, email, password };
        users.push(newUser);
        await AsyncStorage.setItem('users', JSON.stringify(users));

        Alert.alert('Registration successful!');

        // Navigate to Login Screen
        navigation.replace("Login");
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('An error occurred during registration');
    }
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Register</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#888"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#888"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
        secureTextEntry
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separatorLine} />
      </View>

      {/* Login with Google */}
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require('../assets/Images/Google.png')}
          style={styles.socialButtonLogo}
        />
        <Text style={styles.socialButtonText}>Login with Google</Text>
      </TouchableOpacity>

      {/* Login with Facebook */}
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require('../assets/Images/Facebook.png')}
          style={styles.socialButtonLogo}
        />
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#021526',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'left',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "white",
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#888',
  },
  socialButton: {
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    borderColor: "#3498db",
    borderWidth: 1,
    justifyContent: "center",
  },
  socialButtonLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
