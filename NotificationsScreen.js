import * as React from 'react';
import { Button, View,Text } from 'react-native';
import BoxScreen from './BoxScreen'

export default function NotificationsScreen ({ navigation }) {
  return (
    <View style={{ flex: 1,justifyContent: 'center',backgroundColor:'#F0F8FF' }}>
      <View style={{flexDirection:'row-reverse',padding:10,justifyContent:'center'}}>
        <View style={{width: 50, height: 20, backgroundColor: '#800000'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#2E8B57'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#800000'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#2E8B57'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#800000'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#2E8B57'}} />
      </View>
      <Text style={{padding: 10,fontSize: 28,height: 50,textAlign:'center'}}>ติดต่อสอบถาม</Text>
      <View style={{flexDirection:'row-reverse',padding:10,justifyContent:'center'}}>
        <View style={{width: 50, height: 20, backgroundColor: '#800000'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#2E8B57'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#800000'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#2E8B57'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#800000'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#2E8B57'}} />
      </View>
      <BoxScreen />
      <Button onPress={() => navigation.goBack()} title="Go back home" color="#FF4500" />
      </View>
      
  );
}
