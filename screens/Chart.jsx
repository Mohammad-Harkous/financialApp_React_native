import { View, Text, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


const Chart = () => {
  return (
    <ScrollView horizontal>
    <View className='mt-12 ml-2 '>
      <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul"],
      datasets: [
        {
          data: [1000, 3000, 7000, 2000, 8000, 5000, 4000]
        }
      ]
    }}
    width={450} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#020024",
      backgroundGradientFrom: "#3450b1",
      backgroundGradientTo: "#00d4ff",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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