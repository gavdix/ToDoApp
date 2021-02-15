import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";

import AddTask from "./components/AddTask";
import TaskList from './components/TaskList';

const Separator = () => {
    return <View style={style.separatorStyle}></View>
}

const HomeScreen = () => {
    const [taskData , setTaskData] = useState([
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
        setTaskData([...taskData, {id, ...newTask}])
    }

    return (
        <View>
            <Text>Home Screen</Text>
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