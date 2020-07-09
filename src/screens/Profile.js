import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, Alert} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

function Profile({navigation}){

    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.UpperView}>
                <View style={styles.UpperBar}>
                    <Text style={styles.MyprofileText}> My Profile</Text>
                    <Text style={styles.EditText}> Edit</Text>
                </View>
                <View style={styles.ProfileImage}>
                    <Image source={require('../../assets/cr7.jpg')} style={styles.img}></Image>
                </View>
            </View>
            <View style={styles.FieldView}>
                <Text style={styles.FieldTypeText}>FULL NAME</Text>
                <Text style={styles.FieldText}>Cristiano Ronaldo</Text>
            </View>
            <View style={styles.FieldView}>
                <Text style={styles.FieldTypeText}>EMAIL</Text>
                <Text style={styles.FieldText}>Cr7@gmail.com</Text>
            </View>
            <View style={styles.FieldView}>
                <Text style={styles.FieldTypeText}>PHONE</Text>
                <Text style={styles.FieldText}>333 0000000</Text>
            </View>
        </View>
    );
}


const styles= StyleSheet.create({
    UpperView:{
        flex: 0.4,
        backgroundColor:'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    UpperBar:{
        flex: 0.22,
        backgroundColor: 'white'
    },
    ProfileImage: {
        flex: 0.78,
        backgroundColor: 'white'
    },
    img: {
        position: 'relative',
        left: '28%',
        top: '10%',
        height: 180,
        width: 180,
        borderRadius:110,
        borderColor: 'lightgrey',
        borderWidth: 2,
    },
    MyprofileText:{
        position: 'relative',
        top: '25%',
        left: '5%',
        fontSize:26,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'sans-serif'
    },
    EditText:{
        position: 'absolute',
        top: '30%',
        left: '85%',
        fontSize:22,
        color: 'green',
        fontFamily: 'sans-serif'
    },
    FieldTypeText: {
        position: 'relative',
        top: '30%',
        left: '5%',
        fontSize:22,
        color: 'grey',
        fontFamily: 'sans-serif'
    },
    FieldText: {
        position: 'absolute',
        top: '34%',
        left: '62%',
        fontSize:18,
        fontFamily: 'sans-serif'
    },
    FieldView:{
        flex: 0.12,
        backgroundColor: 'white'
    },
})
export default Profile;