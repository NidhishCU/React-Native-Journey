import React,{useState} from "react";
import { View,FlatList, Text, } from "react-native";

const data=[
    {id:1,name:'First'},
    {id:2,name:'Second'},
    {id:3,name:'Third'},
    {id:4,name:'Fourth'},
];


const F=()=>{
    return(
        <FlatList
        data={data}
        renderItem={({item})=>(
            <View >
                <Text style={{fontSize:30,color:'black',margin:10,backgroundColor:'green'}}>{item.name}</Text>
            </View>
        )}
        keyExtractor={(item)=>item.id.toString()}
        />
    );
}
export default F;