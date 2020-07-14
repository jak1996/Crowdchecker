import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, Alert} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import * as firebase from "firebase";

function Profile({navigation}){
    var userRef = firebase.database().ref(firebase.auth().currentUser.uid).on('value', (snapshot) => {
        const userObj = snapshot.val();
        this.name = userObj.Name;
        this.number = userObj.Number;
      });

    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.UpperView}> 
                <View style={styles.UpperBar}>
                    <Text style={styles.MyprofileText}> My Profile</Text>
                    <Text style={styles.EditText} onPress={() => alert('not avaiable in demo version')}> Edit</Text>
                </View>
                <View style={styles.ProfileImage}>
                    <Image   source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/crowd-checker-33624.appspot.com/o/uomo%20normale.jpg?alt=media&token=f891e7e1-7297-4eb7-8c70-394987fa1604' }} style={styles.img}></Image>
                </View>
            </View>
            <View style={styles.FieldView}>
                <Text style={styles.FieldTypeText}>Full Name</Text>
                <Text style={styles.FieldText}>{this.name}</Text>
            </View>
            <View style={styles.FieldView}>
                <Text style={styles.FieldTypeText}>E-Mail</Text>
                <Text style={styles.FieldText}>{firebase.auth().currentUser.email}</Text>
            </View>
            <View style={styles.FieldView}>
                <Text style={styles.FieldTypeText}>Cellphone</Text>
                <Text style={styles.FieldText}>{this.number}</Text>
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