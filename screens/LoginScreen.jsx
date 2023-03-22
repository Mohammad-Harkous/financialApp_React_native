import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as SecureStore from 'expo-secure-store';
import { BG, logo } from '../assets';





const LoginScreen = ({ navigation }) => {

  const [errorMessage, setErrorMessage] = useState('');
  

  const handleLogin = async (values) => {
  
    try {
      const response = await fetch('http://192.168.0.106:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      // Save token to secure storage
      await SecureStore.setItemAsync('token', data.token)
      let token = await SecureStore.getItemAsync('token')
      console.log(token)
      
      

      // Navigate to DashboardScreen
      navigation.replace('DashboardScreen'); 
      
      
    } catch (error) {
      setErrorMessage('Invalid email or password');
      console.log(error);
    }
  
  }

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync('token');
      if (token) {
        // Use token to authenticate user automatically
        navigation.replace('DashboardScreen'); 
      }
    };
    checkToken();
  }, []);

  

  return (
    <View className='flex-1 items-center justify-center bg-[#2148C0] relative'>
      <Image source={BG} className='w-full h-full object-cover' />
     
      <SafeAreaView className='absolute z-10 flex  inset-40'>
        <View className='flex-1 items-center justify-center'>
        <Image source={logo} className=' object-cover' />
        <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
       
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Enter your email"
              className="mt-16 pl-10 w-48 h-8  bg-white rounded"
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="password"
              secureTextEntry={true}
              className="mt-3 pl-16 w-48 h-8  bg-white rounded"
            />

            <TouchableOpacity onPress={handleSubmit} className="mt-3 pt-1 w-32 h-7 rounded bg-white pl-10 ">
              <Text className="pl-1">Login</Text>
            </TouchableOpacity>
          
          </>
        )}
      </Formik>
      <Text style={{ color: 'red' }} className='mt-3 w-40'>{errorMessage}</Text>
        </View>
          
      </SafeAreaView>
    </View>
  )
}

export default LoginScreen;