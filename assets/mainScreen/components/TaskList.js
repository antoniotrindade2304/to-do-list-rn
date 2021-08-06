import React, { useState } from "react";
import { FlatList, Text } from "react-native";

function TaskList(){
    const [taskData, setTaskData] = useState([]);

    const handleGetTask = (task) => {
        let newTaskData = [...taskData];
        newTaskData.push({
            task: task
        })
        setTaskData(newTaskData);
    }
    return(
        <FlatList
            data = {taskData}
            getTask = {handleGetTask}
            renderItem = {({item}) => <Text style = {{color: "#fff"}}>{item.task}</Text>}
        />
    );
};

export default TaskList;