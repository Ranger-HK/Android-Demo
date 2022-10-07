import React from "react";
import { View,Text,Button,StyleSheet } from "react-native";
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import A from "./screens/A";
import B from "./screens/B";
import C from "./screens/C";







function App(){
  return(
    <View>
      <Text style={styles.text}>Hello Welocme Mr Ravindu Prathibha </Text>
     <Button
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

<Bubbles size={10} color="#16a085" />

<B/>
<A/>
<C/>
    </View>
    
  ); 
}

const styles = StyleSheet.create({
  text:{
     color:'#2980b9',
     fontSize:30,

 }

})

export default App;
