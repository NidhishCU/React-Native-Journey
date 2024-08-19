import React,{Component} from "react";
import { Button,ScrollView,Text,TextInput,View } from "react-native";
import Student from "./Student";

class StatePropsInClassComponent extends Component{
constructor(){
    super();
    this.state={
        name:'Nidhish',
        age:26
    }
}
updateName(val){
    this.setState({name:val})
}
    render(){
        return(
            <ScrollView style={{backgroundColor:'lightblue'}}>
                <Text style={{fontSize:30,color:'grey',marginLeft:'15%'}}>{this.state.name}</Text>
                <TextInput placeholder="Enter your name" placeholderTextColor={'grey'} style={{borderColor:'black',borderWidth:1,margin:'5%'}}
                onChangeText={(text)=>this.updateName(text)}
                ></TextInput>
                <Button title="press me"/>
                <Student name={this.state.name}/>

            </ScrollView>
        );
    }
}
export default StatePropsInClassComponent;