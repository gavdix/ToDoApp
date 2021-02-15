import React from 'react';
import { View, StyleSheet } from "react-native";
import HomeScreen from "./src/HomeScreen";

const App = () => {
  return (
    <View style={appStyle.container}>
      <HomeScreen />
    </View>
  );
};

const appStyle = StyleSheet.create({
  container: {
      flex: 1,
      marginHorizontal: 8,
  }
})

export default App;
