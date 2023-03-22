import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Card = ({title, amount}) => {

  return (
    <SafeAreaView >
        <View className="w-80 h-36 m-auto mt-10 pt-10 pl-5 border-2 rounded-3xl border-transparent bg-[#304DAF]">
          <Text className='color-[#FFFFFF] text-2xl -mt-4 '>{title}</Text>
          <Text className='color-[#FFFFFF] text-5xl pt-4 '>${amount}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Card;