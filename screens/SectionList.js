import React from "react";
import { Text, View,SectionList } from "react-native";

const users=[
    {id:1,name:'Anil',data:['php','js','c++','java']},
    {id:2,name:'Nidhish',data:['cpp','javascript','react-native','java']}
]

const Section=()=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:55}}>
                SectionList
            </Text>

            <SectionList
            sections={users}
            renderItem={({item})=><Text style={{fontSize:20,color:'red'}}>{item}</Text>}
            renderSectionHeader={({section:{name}})=>(
                <Text style={{fontSize:35,color:'blue'}}>{name}</Text>
            )}
            />

        </View>
        
    );
}
export default Section;