import React from "react";
import styled from "styled-components/native";
import { Image, TouachableOpacity, TouchableOpacity } from "react-native";


export const Page = styled.SafeAreaView`
    flex: 1;
    background-color: #000;
    align-items: center;
`

export const HeaderText = styled.Text`
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    margin-top: 20px;
`

export const InputArea = styled.View`
    flex-direction: row;
`

export const TextInput = styled.TextInput`
    width: 90%;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    font-size: 20px;
    margin-top: 20px;
    padding: 10px;
    margin-bottom: 20px;
`
export const ItemTask = styled.TouchableOpacity`
    padding: 5px;
    width: 400px;
    background-color: yellow;
    margin: 5px;
    border-radius: 5px;
    flex-direction: row;
`

export const FooterText = styled.Text`
    color: white;
    font-size: 20px;
    font-style: italic;
`


export const AddButtonIcon = () => {
    return(
    
             <Image
                style = {{
                    width: 40,
                    height: 40,
                    marginTop: 19
                }}
                source = {require("./add_Icon.png")}
            />
        
       
    );
}

export const DeleteButtonIcon = () => {
    return(
    
             <Image
                style = {{
                    width: 40,
                    height: 40,
            
                }}
                source = {require("./delete_Icon.png")}
            />
        
       
    );
}

export const CheckedButtonIcon = () => {
    return(
    
             <Image
                style = {{
                    width: 40,
                    height: 40
                   
            
                }}
                source = {require("./checked_Icon.png")}
            />
        
       
    );
}

export const UncheckedButtonIcon = () => {
    return(
    
             <Image
                style = {{
                    width: 40,
                    height: 40
                 
            
                }}
                source = {require("./unchecked_Icon.png")}
            />
        
       
    );
}