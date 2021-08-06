import React, { useState, useEffect } from "react";
import { Page, HeaderText, TextInput, AddButtonIcon, InputArea, ItemTask, FooterText, DeleteButtonIcon, CheckedButtonIcon, UncheckedButtonIcon } from "./style/index";
import TaskList from "./components/TaskList";
import { TouchableOpacity, Text, FlatList, Alert, Keyboard } from "react-native";


function MainScreen(props){
    const [task, setTask] = useState("");
    const [cor, setCor] = useState("");
    const [taskData, setTaskData] = useState("");

    const handleAddButton = () => {

        if(task.trim() != '' ){
            let newTaskData = [...taskData];
            newTaskData.push({
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
                    <AddButtonIcon/>
                </TouchableOpacity>
                
            </InputArea>
           
            <FlatList 
                data = {taskData}
                renderItem = {({item, index}) => 
                <ItemTask key = {index} style = {{backgroundColor: item.done ? "#62f07f" : "#f0e91f"}} onPress = { () => handlePressTask(index) }>
                    {item.done ? 
                        <>
                            <Text style = {{color: "#000", fontSize: 20, marginTop: 5, textDecorationLine: "line-through", fontWeight: "bold", width: "80%"}}>
                                {item.task}
                            </Text>
                            <TouchableOpacity>
                                <UncheckedButtonIcon />
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <DeleteButtonIcon />
                            </TouchableOpacity>
                            
                        </>
                        :
                        <>
                            <Text style = {{color: "#000", fontSize: 20, fontWeight: "bold", marginTop: 5, width: "80%"}}>
                                {item.task}
                            </Text>

                            <TouchableOpacity>
                                <CheckedButtonIcon />
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <DeleteButtonIcon />
                            </TouchableOpacity>
                            
                        </>
                    }
                    
                </ItemTask>}
            />
            
            <FooterText>Desenvolvido para: Joceane Puridade</FooterText>
        </Page>
    );
};

export default MainScreen;