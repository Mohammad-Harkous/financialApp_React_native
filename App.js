import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { LoginScreen, DashboardScreen, LogoutScreen, ProfitGoals } from './screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();


const MyTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: '#3450b1', paddingBottom: 0 }} activeColor="#020024" inactiveColor="#FFFFFF" >
    <Tab.Screen name="Dashboard" component={DashboardScreen} options={{tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
          ),}}/>
    <Tab.Screen name="Profit Goals" component={ProfitGoals} options={{tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cash" color={color} size={26} />
          ),}}/>
    <Tab.Screen name="Logout" component={LogoutScreen} options={{tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),}}/>
  </Tab.Navigator>
  
  )
}



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DashboardScreen" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>  
  )
}

export default App