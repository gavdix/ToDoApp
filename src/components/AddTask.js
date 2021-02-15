import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

const AddTask = ({ addTask }) => {

    const [value, setValue] = useState('')
    const [details, setDetails] = useState('')

    const submitTask = () => {
        if (value.length === 0) {
            console.log('enter task')
            return
        }
        addTask({value, details});
        setValue('');
        setDetails('');
    }

    return (
        <View>
            <Text>Add Task</Text>
            <TextInput 
                value={value} 
                placeholder="Task Title"
                onChangeText={(text) => setValue(text)}
                style={addTaskStyle.textInputStyle}
            />
            <TextInput 
                placeholder="Task Details"
                style={addTaskStyle.textInputStyle}
                value={details}
                onChangeText={(detail) => setDetails(detail)}
            />
            <Button 
                title="Save Task"
                onPress={submitTask}
            />
        </View>
    )
}

const addTaskStyle = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        marginVertical: 10,
    }
})

export default AddTask;