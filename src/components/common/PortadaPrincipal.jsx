import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
 
 
export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text></Text>
         
        <Image
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require("../../../assets/ENCABEZADO-NU-NATURAL.jpg")}
        />
        
    </View>
  );
}