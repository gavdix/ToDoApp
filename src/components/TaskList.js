import React from "react";
import { FlatList, Text, View, StyleSheet, Button } from "react-native";
// import { BsX } from 'react-icons/bs';
// import { FaTimes } from "react-icons/fa";

const TaskList = ({ taskData, deleteTask }) => {

    const taskRender = ({ item }) => {
        return (
        <View style={taskListStyle.taskRenderStyle}>
            <View>
                <Text>{item.value}</Text>
                <Text>{item.details}</Text>
                <Button title="delete" onPress={() => deleteTask(item.id)}/>
            </View>
            {/* <h3><BsX /> </h3> */}
        </View>
        )
    }

    return (
        <View>
            <Text>Task List</Text>
            <FlatList
                data={taskData} 
                renderItem={taskRender}
                keyExtractor={item => item.id}
                style={taskListStyle.taskListContainer}
            />
        </View>
    )
}

const taskListStyle = StyleSheet.create({
    taskListContainer: {
        marginVertical: 4,
        borderWidth: 1,
        backgroundColor: 'blue',
    },
    taskRenderStyle: {
        marginVertical: 2,
        backgroundColor: 'green',
        marginHorizontal: 2,
    }
})

export default TaskList;