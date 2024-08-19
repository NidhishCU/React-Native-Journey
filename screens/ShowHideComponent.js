import React,{useState} from "react";
import { Button,ScrollView,Text, View } from "react-native";

const ShowHideComponent=()=>{
    const [visible,setVisible]=useState(true);
    return(
        <ScrollView style={{backgroundColor:'orange'}}>
            <Text style={{fontSize:30,color:'black',marginLeft:'30%',fontWeight:'bold'}}>Hide/Show</Text>
           {
            visible?  <User/>:null
           }
            <Button title={visible?"Hide":"Show"} onPress={()=>setVisible(!visible)}></Button>
        </ScrollView>
    );
}
export default ShowHideComponent;

const User=()=>{
    return(
        <View>
            <Text style={{fontSize:30,margin:'6%',color:'darkred'}}>User Component!!</Text>
        </View>
    );
}