import React, { useState } from 'react';
import { View, Text, TextInput,StyleSheet, Alert, Pressable, Image, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const LoginScreen = () => {
  const navigation=useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // login logic here
     Alert.alert(`Welcome To WebTuks : ${username}`)
    setHeading(`Webtuks Welcome : ${username}`)
  };

  const [Heading,setHeading]=useState('Welcome To WebTuks!')

  return (
    <View style={styles.container}>
      <Text style={{marginBottom:35, fontWeight:'bold', fontSize:26, color:'black'}}>{Heading}</Text>
      <Logo />
      <Username username={username} setUsername={setUsername}/>
      <Password password={password} setPassword={setPassword} />
      <Lbutton handleLogin={handleLogin} />
      <Register navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderTopLeftRadius:100
  },
  logo:{
   marginBottom:42,
   borderRadius:100,
   width:100,
   height:100

  }
  ,
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  input: {
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
    backgroundColor: 'black',
    width:250,
    height:42,
  },
  
  text: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
  }
});

export default LoginScreen;

// components

const Username=(props)=>{
  return(
    <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="black"
        value={props.username}
        onChangeText={(text) => props.setUsername(text)}
      />
  );
}

const Password=(props)=>{
  return (
  <TextInput
  style={styles.input}
  placeholder="Password"
  placeholderTextColor="black"
  value={props.password}
  onChangeText={(text) => props.setPassword(text)}
  secureTextEntry={true}
/>
  )
}

const Lbutton=(props)=>{
  return(
    <Pressable style={styles.button} onPress={props.handleLogin}>
      <Text style={styles.text}>Login</Text>
    </Pressable>
  )
}

const Register=(props)=>{
  return(
    <Text style={{color:'blue', marginTop:10}} onPress={() => props.navigation.navigate('SignUp')} >Register?</Text>
  )
}

const Logo=()=>{
  return(
    <View>
      <Image source={require('../assets/image.png')} style={styles.logo}></Image>
      </View>
  )
}
