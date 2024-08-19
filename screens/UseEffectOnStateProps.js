import React,{useEffect,useState} from "react";
import { Button,ScrollView,Text, View } from "react-native";

const UseEffectOnStateProps=()=>{
    const [count,setCount]=useState(0);
    const [data,setData]=useState(15);

useEffect(()=>{
    if(count>10){
    console.warn(('mount'));
    }
},[count]);

    return(
        <ScrollView style={{backgroundColor:'lightpink'}}>
            <Text style={{fontSize:25,color:'black',margin:'4%',textDecorationLine:'underline'}}> Hooks in Specific State and Props</Text>
            <Text style={{fontSize:20,color:'black',marginLeft:'20%'}}>State1 : {count}</Text>
            <Text style={{fontSize:20,color:'black',marginLeft:'20%'}}>State2 : {data}</Text>
            <Button title="State1" onPress={()=>setCount(count+1)}></Button>
            <Button title="state2" onPress={()=>setData(data+1)}></Button>
            <User para={{count,data}}/>

        </ScrollView>
    );
}
export default UseEffectOnStateProps;

const User=(props)=>{
    useEffect(()=>{
        console.warn('data changed')
    },[props.para.data]);

    return(
        <View>
            <Text style={{fontSize:30,color:'red',margin:10}}>User Component</Text>
            <Text style={{fontSize:20,color:'black'}}>Data: {props.para.data}</Text>
            <Text style={{fontSize:20,color:'black'}}>Count: {props.para.count}</Text>
        </View>
    );
}