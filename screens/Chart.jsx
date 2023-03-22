import { View, Text, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { useEffect,useState } from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


const Chart = () => {
  const [graph,setGraph]=useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul",'aug','sept','oct','nov','dec'],
    datasets: [
      {
        data:[12,12,12,12]
      }
    ]
  })


  useEffect(() => {
  
    
const getGraph= async () => {
  let token = await SecureStore.getItemAsync('token')
  
  
    try {
      const response = await fetch('http://192.168.0.107:8000/api/report/2023', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
       
      });
     
      const data = await response.json();
    let result=data[0].total
    console.log(result)
      
      setGraph({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul",'aug','sept','oct','nov','dec'],
        datasets: [
          {
            data:result
          }
        ]
      })
      
    } catch (error) {
      
      console.log(error);
    
    };
    }
    getGraph();
  }, []);
  return (
    <ScrollView horizontal>
    <View className='mt-12 ml-2 '>
      <Text className=' m-auto'>Yearly Graph.</Text>
  <LineChart
    data={graph}
    width={400} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#ffffffff",
      backgroundGradientFrom: "#000045",
      backgroundGradientTo: "blue",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255,122, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#00d4ff"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
    </View>
    </ScrollView>
  )
}

export default Chart