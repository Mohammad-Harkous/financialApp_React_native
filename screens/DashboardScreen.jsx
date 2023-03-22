import { View, Text } from 'react-native'
import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios";
import {  SafeAreaView, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Card from './Card';
import Chart from './Chart';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const DashboardScreen = () => {
  
  const [total,setTotal]=useState('')


  useEffect(() => {
    
    
const getTotal= async () => {
  let token = await SecureStore.getItemAsync('token')
  
  
    try {
      const response = await fetch('http://192.168.0.107:8000/api/transaction/total', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
       
      });
     
      const data = await response.json();
      
      setTotal(data)
    } catch (error) {
      
      console.log(error);
    
    };
    }
    getTotal();
  }, []);
  

  return (
    <SafeAreaView>
      <ScrollView>
        <View > 
          <Card title={'Total Earnings '} amount={total.total} />
          <Card title={'Total Income'} amount={total.income} />
          <Card  title={'Total Expenses'} amount={total.expense} />
          <Chart />
        </View>

      

      </ScrollView>
    </SafeAreaView>
  )
}

export default DashboardScreen;