import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect, useRef } from 'react';
import { View, AppState, StyleSheet } from "react-native";

import AddTask from "./components/AddTask";
import TaskList from './components/TaskList';

const Separator = () => {
    return <View style={style.separatorStyle}></View>
}

const HomeScreen = () => {

    const storeTaskData = async (value) => {
        try {
            await AsyncStorage.setItem('@toDoAppTasks', value)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        AppState.addEventListener("change", (taskData) => { _handleAppStateChange(taskData) });

        // return () => {
        //     AppState.removeEventListener("change", _handleAppStateChange);
        // };
    }, []);

    const _handleAppStateChange = (taskData) => {
        console.log(AppState.currentState + " & taskData " + taskData)
        if (AppState.currentState !== "active") {
            const jsonValue = JSON.stringify(taskData);
            console.log("json value  ", jsonValue);
            storeTaskData(jsonValue);
        }
    };    

    let [taskData , setTaskData] = useState([
        {
            id: '1',
            value: "Milk",
            details: "nadini milk"
        },
        {
            id: '2',
            value: "Curd",
            details: "Thirumala curd"
        },
        {
            id: '3',
            value: "oats",
            details: "Ramdev masala"
        }
    ]);

    const deleteTask = (itemId) => {
        console.log(itemId);
        setTaskData(taskData.filter((task) => task.id !== itemId))
    }

    const addTask = (newTask) => {
        let id = Math.floor(Math.random() * 100) + 1;
        setTaskData((taskData) => {return [...taskData, {id, ...newTask}]})
        console.log("set task data  ", taskData);

        // const jsonValue1 = JSON.stringify(taskData);
        // console.log("json value  ", jsonValue1);
        // storeTaskData(jsonValue1);
    }

    return (
        <View style={{marginTop: 20}}>
            {/* <Text>Home Screen</Text> */}
            <AddTask addTask={addTask}/>
            <Separator />
            <TaskList taskData={taskData} deleteTask={deleteTask}/>
        </View>
    )
}

const style = StyleSheet.create({
    separatorStyle: {
        marginVertical: 10,
        borderWidth: StyleSheet.hairlineWidth
    }
})

export default HomeScreen;