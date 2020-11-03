import *as React from 'react'
import {View,Text, Button}from 'react-native'

import AboutScreen from './screen/AboutScreen'
import HomeScreen from './screen/HomeScreen'
import NotificationsScreen from './screen/NotificationsScreen'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const NotificationsStack = createStackNavigator()
const HomeStack = createStackNavigator()
const AboutStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const HomeStackScreen =()=>{
  return(
    <HomeStack.Navigator
      screenOptions={{
        title:'My Home',
        headerStyle:{
          backgroundColor:'#228B22',
        },
        headerTintColor:'#fff'
    }}
    >
    <HomeStack.Screen name="Home" 
      component={HomeScreen} 
      options={{title:'My Home'}}
    />
  </HomeStack.Navigator>  
  )
}

const AboutStackScreen =()=>{
  return(
    <AboutStack.Navigator
      screenOptions={{
        title:'About',
        headerStyle:{
          backgroundColor:'#228B22',
        },
        headerTintColor:'#fff'
    }}
    >
    <AboutStack.Screen name="About" 
      component={AboutScreen} 
      options={{}}
    />
  </AboutStack.Navigator>  
  )
}

const NotificationsStackScreen =()=>{
  return(
    <NotificationsStack.Navigator
      screenOptions={{
        title:'Notifications',
        headerStyle:{
          backgroundColor:'#228B22',
        },
        headerTintColor:'#fff'
    }}
    >
    <NotificationsStack.Screen name="Notifications" 
      component={NotificationsScreen} 
      options={{}}
    />
  </NotificationsStack.Navigator>  
  )
}

const App=()=>{
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


export default App;