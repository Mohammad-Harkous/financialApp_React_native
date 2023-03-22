import { View, Text } from 'react-native'
import React from 'react'
import {  SafeAreaView, ScrollView } from 'react-native';
import Card from './Card';
import Chart from './Chart';


const DashboardScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View > 
          <Card title={'Total Earning'} amount={'40,500'} />
          <Card title={'Total Income'} amount={'80,500'} />
          <Card title={'Total Expenses'} amount={'40,000'} />

        
          <Chart />
        </View>

      

      </ScrollView>
    </SafeAreaView>
  )
}

export default DashboardScreen;