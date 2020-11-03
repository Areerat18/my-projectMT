import * as React from 'react';
import { Button, View,Text,Image } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1,backgroundColor:'#FAFAD2',paddingHorizontal:10}}>
      <Text style={{padding: 10,fontSize: 28,height: 50,textAlign:'center'}}>การลดน้ำหนัก</Text>
      <Text style={{fontSize:18,padding:5}}>ประกอบไปด้วย</Text>
      <View>
        <Text>1.อาหารเช้าควรเลือกที่ให้พลังงานสูงและอิ่มท้องนาน</Text>
        <Text>2.อาหารกลางวันเป็นมื้อที่ไม่ควรทานอาหารที่ให้พลังงานมาก เนื่องจากพลังงานส่วนเกินจะไปพอกตามส่วนต่างๆ โดยเฉพาะหน้าท้องและต้นขา</Text>
        <Text>3.อาหารเย็นควรกินในปริมาณที่น้อย และไม่ควรกินเกิน 6 โมงเย็น</Text>
        <Text >4.การออกกำลังกาย ซึ่งเราวางตารางให้เพื่อนๆ 5 วัน หยุด 2 วัน</Text>
        <Text style={{padding:10}}># ตารางออกกำลังกาย ลดน้ำหนัก ลดพุง #</Text>
        <Image source={require('./w2.jpg')} style={{ width:250, height:160}}/>
      </View>
      <View style={{flex: 1, flexDirection:'row-reverse',padding:10,justifyContent:'center'}}>
        <View style={{width: 50, height: 20, backgroundColor: '#800000'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#2E8B57'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#800000'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#2E8B57'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#800000'}} />
        <View style={{width: 50, height: 20, backgroundColor: '#2E8B57'}} />
      </View>
      <Button onPress={() => navigation.goBack()} title="Go back home" color="#FF4500"/>
    </View>
  );
}