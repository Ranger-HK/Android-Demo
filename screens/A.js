import { View, Text,StyleSheet } from 'react-native'
import React from 'react'


export default function A() {
  return (
    <View>
      <Text style={styles.text}>Welcome To Home </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    text:{
       color:'#f39c12',
       fontSize:30,
  
   }});