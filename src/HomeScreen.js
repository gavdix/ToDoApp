import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect} from 'react';
import { View, StyleSheet } from "react-native";

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

    const getTaskData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@toDoAppTasks')
          if (jsonValue !== null) {
            let retrivedTaskData = JSON.parse(jsonValue);
            // console.log("jason returned by getitem", jsonValue);
            setTaskData(retrivedTaskData);
          } else {
            console.log("I am null");
          }
        } catch (error) {
          console.log(error);
        }
        return null;
    }

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

    useEffect(() => {
        getTaskData();
    }, []);

    useEffect(() => {
        // console.log("componentDidUpdate===============================", taskData)
        const jsonValue = JSON.stringify(taskData);
        storeTaskData(jsonValue);
    }, [taskData]);

    const deleteTask = (itemId) => {
        console.log(itemId);
        setTaskData(taskData.filter((task) => task.id !== itemId))
    }

    const addTask = (newTask) => {
        let id = Math.floor(Math.random() * 100) + 1;
        setTaskData((taskData) => {return [...taskData, {id, ...newTask}]})
        // console.log("set task data  ", taskData);
    }

    return (
        <View style={{marginTop: 20}}>
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