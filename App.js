import React from 'react';
import { View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from "./src/HomeScreen";

const App = () => {

  const getTaskData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@toDoAppTasks')
      if (jsonValue !== null) {
        console.log(JSON.parse(jsonValue));
      } else {
        console.log("I am null");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  getTaskData();

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
