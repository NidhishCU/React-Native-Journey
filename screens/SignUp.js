import React, {useState} from "react";
import {StyleSheet, TextInput, View,Image,Pressable,Text, SafeAreaView} from 'react-native';

const SignUp=()=>{
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [contact,setContact]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  let [display,setDisplay]=useState(false);

    return (
      <SafeAreaView style={styles.container}>
        <View>
      <Image source={require('../assets/image.png')} style={styles.logo}></Image>
      </View>
        <TextInput
        placeholder='Username'
        style={styles.textBox}
        value={user}
        onChangeText={text=>setUser(text)}
        />
        <TextInput
        placeholder='Email'
        style={styles.textBox}
        value={email}
        onChangeText={text=>setEmail(text)}
        />
        <TextInput
        placeholder='Contact'
        style={styles.textBox}
        value={contact}
        onChangeText={text=>setContact(text)}
        />
        <TextInput
        placeholder='Password'
        style={styles.textBox}
        value={password}
        secureTextEntry={true}
        onChangeText={text=>setPassword(text)}
        />
        <TextInput
        placeholder='Confirm Password'
        style={styles.textBox}
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={text=>setConfirmPassword(text)}
        />
        <Pressable style={styles.button} onPress={()=>setDisplay(true)}>
      <Text style={styles.text}>SignUp</Text>
    </Pressable>
    <View>
      {
        display?<View>
          <Text>Username: {user}</Text>
          <Text>Email: {email}</Text>
          <Text>Contact: {contact}</Text>
        </View>:null
      }
    </View>
      </SafeAreaView>  
    );


};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#D9D9D9',
    padding:20,
    marginTop:50,
    marginBottom:50,
    borderBottomLeftRadius:100,
    borderBottomEndRadius:100,
    borderTopLeftRadius:100,
  },
  logo:{
    marginBottom:20,
    borderRadius:100,
    width:100,
    height:100
 
   }
   ,
  textBox:{
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    color:'black',
    width: 250,
    marginBottom: 20,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    borderTopLeftRadius:15,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    borderTopLeftRadius:15,
    elevation: 3,
    backgroundColor: 'blue',
    width:150,
    height:42,
  },
  text:{
    fontSize: 15,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  }
});
export default SignUp;

// Components

