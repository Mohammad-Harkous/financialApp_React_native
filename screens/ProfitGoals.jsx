import { View, Text } from 'react-native'
import React from 'react'

const ProfitGoals = () => {
  return (
    <View className="w-80 h-44 ml-5 mr-5 m-auto p-10  border-2 rounded-3xl border-transparent bg-[#304DAF]">
    <View className='items-center justify-center -mt-4'>
      <Text className='color-[#FFFFFF] text-2xl -mt-1'>Goal of 2023</Text>
    </View>

    <View className='flex-row items-center justify-center space-x-3 mt-2'>
      <Text className='color-[#FFFFFF] text-[17px]'>2023-01-01</Text>
      <Text className='color-[#FFFFFF] text-[17px]'>2023-12-31</Text>
    </View>

    <View className='flex-row items-center justify-center space-x-3 mt-2'>
    <Text className='color-[#FFFFFF] text-[17px] '>Expense:$ 450,098</Text>
      <Text className='color-[#FFFFFF] text-[17px]'>Income:$ 450,098</Text>
    </View>

    <View className='flex-row items-center justify-center space-x-3 mt-2'>
      <Text className='color-[#FFFFFF] text-[17px] '>Process:$ 267, 241</Text>
      <Text className='color-[#FFFFFF] text-[17px]'>Total:$ 360, 000</Text>
    </View>
  </View>
  )
}

export default ProfitGoals