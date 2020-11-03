import * as React from 'react';
import { Button, View,Text,Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#F0F8FF' }}>
      <Text style={{color:'#006400',padding:10,fontSize:25}}>Healthy diet and Exercise</Text>
      <Image source={require('./w3.jpg')} style={{ width:310, height:160}}/>
      <View style={{flex: 1, flexDirection:'row-reverse',padding:20}}>
        <View style={{width: 150, height: 150, backgroundColor: '#FF00FF'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#7FFF00'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#FF7F50'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#008B8B'}} />
        <View style={{width: 150, height: 150, backgroundColor: '#FF00FF'}} />
      </View>
      <Image source={require('./w3.png')} style={{ width:350, height:260}}/>
    </View>
    )
}
