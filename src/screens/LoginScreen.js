import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, Text , TouchableHighlight} from 'react-native';

function LoginScreen({navigation }){
const [username, setUsername] = useState('null')
const [password, setPassword] = useState('null')

    return(
    <View style={styles.background}>    
        <View style= {styles.TextInput}>
            <Image style={styles.img} source={require('../../assets/Logo.png')}></Image>
            <Text style={{position:'absolute', top: 325, left: 45, fontSize:16}}>Username </Text>
            <TextInput 
            style={styles.inputUsername}
            placeholder='insert here your username'
            onChangeText={(val) => setUsername(val)}>
            </TextInput>
            <Text style={{position:'absolute', top: 425, left: 45, fontSize:16}}>Password </Text>
            <TextInput 
            style={styles.inputPassword}
            placeholder='insert here your password'
            onChangeText={(val) => setPassword(val)}>
            </TextInput>
            <Text style={{position:'absolute', left: 90, top: 520, color: 'blue', fontSize:15}}>Password forgotten? click here </Text>
        </View>  
        <TouchableHighlight style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
            <Text style={{position:'absolute', left: 110, top: 10, fontSize:20}}>Login</Text>
        </TouchableHighlight>
    </View>
    );
}


const styles = StyleSheet.create({
    img: {
        position: 'absolute',
        top: 40,
        left: 12,
        height: 240,
        width: '100%',
    },
    loginButton: {
        position: 'absolute',
        top: 580,
        left: 60,
        width: '70%',
        height: 50,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'green',
    },
    TextInput: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 800,
        backgroundColor:'white',
    },
    inputUsername: {
        position: 'absolute',
        top: 350,
        left: 45,
        padding: 10,
        width: 320,
        borderWidth: 1,
        borderColor: '#777'
    },
    inputPassword: {
        position: 'absolute',
        top: 450,
        left: 45,
        padding: 10,
        width: 320,
        borderWidth: 1,
        borderColor: '#777'
    }
})

export default LoginScreen;