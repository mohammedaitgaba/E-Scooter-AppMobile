import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const  validateInputes=()=>{
      if (!username || !password) {
        setError('All fields are required');
        return false 
    }
    else{
        setError('');
        return true
      }
  }
  const handleLogin = () => {
    if (validateInputes()) {
        // logic
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text >E-ScooTer Map</Text>
        <Image style={styles.logo} source={require('../utils/images/Logo-Escooter.png')}></Image>
        {/* <Text style={styles.logo}>Logo</Text> */}
      </View>
      <View style={styles.formContainer}>
        <TextInput
        style={[styles.input, error && styles.errorInput]}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
        style={[styles.input, error && styles.errorInput]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 200, 
    height: 200
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
