import React,{useState} from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const users=[
    {id:1,name:'John'},
    {id:2,name:'Nidhish'},
    {id:3,name:'Sreehari'},
    {id:4,name:'Peter'},
    {id:5,name:'Rahul'},
    {id:6,name:'Sree'},
    {id:7,name:'sita'},
    {id:8,name:'Rohan'},
    {id:9,name:'Anmol'},
    {id:10,name:'Milan'}
];

const MapList=()=>{
    return(
        <View>
            <Text style={{fontSize:30,textAlign:'center'}}>List with Map Function!!</Text>
            <ScrollView>
                {
                    users.map((item)=><Text style={styles.list}>{item.id} : {item.name}</Text>)
                }
            </ScrollView>
        </View>
    );
}

const styles=StyleSheet.create({
    list:{
        fontSize:15,
        color:'black',
        marginTop:10,
        width:250,
        height:100,
        backgroundColor:'blue',
        textAlign:'center',
        margin:10,
        alignContent:'center'
    }
});
export default MapList;