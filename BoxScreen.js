import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import FlatListBasics from './FlatListBasics'

export default function BoxScreen(){
  return(
     <View style={styles.container}>
       <View style={styles.box}>
         <Text style={{textAlign:'center',color:'#800000'}}>Notification</Text>
         <FlatListBasics />
       </View>
       
     </View>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  box:{
    width:350,
    height:250,
    backgroundColor:'#00CED1',
    borderWidth:5,
    borderColor:'#778899',
    borderRadius:20,
  }
})