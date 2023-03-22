import { View, Text } from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react';
import * as SecureStore from 'expo-secure-store';

const ProfitGoals = () => {
  const [goal,setGoal]=useState('')


  useEffect(() => {
    
    
const getGoal= async () => {
  let token = await SecureStore.getItemAsync('token')
  
  
    try {
      const response = await fetch('http://192.168.0.107:8000/api/goal/active', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
       
      });
     
      const data = await response.json();
      console.log(data)
      
      setGoal(data)
    } catch (error) {
      
      console.log(error);
    
    };
    }
    getGoal();
  }, []);
  return (
    <View className="w-80 h-44 ml-5 mr-5 m-auto p-10  border-2 rounded-3xl border-transparent bg-[#304DAF]">
    <View className='items-center justify-center -mt-4'>
      <Text className='color-[#FFFFFF] text-2xl -mt-1'>{goal.title}</Text>
    </View>

    <View className='flex-row items-center justify-center space-x-3 mt-2'>
      <Text className='color-[0] text-[17px]'>{goal.start}</Text>
      <Text className='color-[0] text-[17px]'>{goal.end}</Text>
    </View>

    <View className='flex-row items-center justify-center space-x-3 mt-2'>
    <Text className='color-[#FFA500] text-[17px]'>Income:$ {goal.income}</Text>
    <Text className='color-[#FFA500] text-[17px] '>Expense:$ {goal.expense}</Text>
     
    </View>

    <View className='flex-row items-center justify-center space-x-3 mt-2'>
      <Text className='color-[#00FF00] text-[17px] '>Process:$ {goal.target}</Text>
      <Text className='color-[#00FF00] text-[17px]'>Total:$ {goal.total}</Text>
    </View>
  </View>
  )
}

export default ProfitGoals