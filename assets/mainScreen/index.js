import React, { useState, useEffect } from "react";
import { Page, HeaderText, TextInput, AddButtonIcon, InputArea, ItemTask, FooterText, DeleteButtonIcon, CheckedButtonIcon, UncheckedButtonIcon } from "./style/index";
import TaskList from "./components/TaskList";
import { TouchableOpacity, Text, FlatList, Alert, Keyboard } from "react-native";
import uuid from 'react-native-uuid';

function MainScreen(props){
    const [task, setTask] = useState("");
    const [cor, setCor] = useState("");
    const [taskData, setTaskData] = useState("");

    const handleAddButton = () => {

        if(task.trim() != '' ){
            let newTaskData = [...taskData];
            newTaskData.push({
                id: uuid.v4(),
                task: task,
                done: false
            })
            setTaskData(newTaskData);
            
        }else{
            Alert.alert(
                "Atenção",
                "Insira alguma tarefa",
                [
                    {
                        text: "Tudo bem"
                    }
                ]
            );
        }
        setTask("");
        Keyboard.dismiss();
    }

    const handlePressTask = (index) => {
        console.log(taskData[index].done);
        let newTaskData = [...taskData];
        newTaskData[index].done = !newTaskData[index].done;
        setTaskData(newTaskData);
        console.log(taskData[index].done);
    }

    const handleDeleteButton = (index) => {
        let newTaskData = [...taskData];
        newTaskData = newTaskData.filter((it, i) => {
            if(i != index){
                return true;
            }else{
                return false;
            }
        })
        setTaskData(newTaskData);
    }
 
    return(
        <Page>
            <HeaderText>To-do List</HeaderText>
            <InputArea>
                <TextInput
                    value = {task} 
                    placeholder = "Write some task..."
                    onChangeText = {(t) => setTask(t)}
                />
                <TouchableOpacity onPress = {handleAddButton}>
                    <AddButtonIcon />
                </TouchableOpacity>
                
            </InputArea>
           
            <FlatList 
                data = {taskData}
                renderItem = {({item, index}) => 
                <ItemTask  style = {{backgroundColor: item.done ? "#62f07f" : "#f0e91f"}}>
                    {item.done ? 
                        <>
                            <Text style = {{color: "#000", fontSize: 20, marginTop: 5, textDecorationLine: "line-through", fontWeight: "bold", width: "80%"}}>
                                {item.task}
                            </Text>
                            <TouchableOpacity onPress = { () => handlePressTask(index) }>
                                <UncheckedButtonIcon />
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress = { () => handleDeleteButton(index) }>
                                <DeleteButtonIcon />
                            </TouchableOpacity>
                            
                        </>
                        :
                        <>
                            <Text style = {{color: "#000", fontSize: 20, fontWeight: "bold", marginTop: 5, width: "80%"}}>
                                {item.task}
                            </Text>

                            <TouchableOpacity onPress = { () => handlePressTask(index) }>
                                <CheckedButtonIcon />
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress = { () => handleDeleteButton(index) }>
                                <DeleteButtonIcon />
                            </TouchableOpacity>
                            
                        </>
                    }
                    
                </ItemTask>}
                keyExtractor = {(item) => item.id}
            />
            
        </Page>
    );
};

export default MainScreen;