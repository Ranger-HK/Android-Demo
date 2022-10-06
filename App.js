import React from "react";
import { View,Text,Button } from "react-native";
import Test1 from "./Test1";
import Abc from "./Abc";
import Hi from "./Hi";
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';


function App(){
  return(
    <View>
      <Text>Hello Welocme Mr Ravindu Prathibha </Text>
     <Test1/>
     <Abc/>
     <Hi/>
     <Button
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

<Bubbles size={10} color="#16a085" />


    </View>
    
  ); 
}

export default App;
