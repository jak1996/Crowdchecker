import React, { useState } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import * as firebase from "firebase";

function Statistics({navigation}){
        var userRef = firebase.database().ref(firebase.auth().currentUser.uid).once('value', (snapshot) => {
            const userObj = snapshot.val();
            this.activitydescription = userObj.activitydescription;
            this.activityname = userObj.activityname;
            this.todayvisits = userObj.todayvisits;
            this.thismonthvisits = userObj.thismonthvisits;

          });
    
    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
              <Text style={styles.detailsTitle}>{this.activityname}</Text>
            <View style={styles.UpperView}>
                <View style={styles.ActivityStatusView}>
                    <View style={styles.StatusBar}/>
                    <Text style={styles.SystemStatusText}>The system is active</Text>
                </View>
            </View>
            
            <View style={styles.detailsView}>
            <View style={{flex: 0.2, width:'100%'}}>
  
                </View>
                <View style={{flex: 0.2, width:'100%'}}>
                    <Text style={styles.detailsTitle}>Activity Details</Text>
                </View>
                <View style={{flex: 0.8, flexDirection: 'row', width: '90%'}}>
                    <Text style={styles.detailsDescription}>{this.activitydescription}</Text>
                </View>
            </View>
            <View style={styles.dataView}>
                <Text style={styles.FieldTypeText}>Today Visits</Text>
                <Text style={styles.FieldText}>{this.todayvisits}</Text>
            </View>
            <View style={styles.dataView}>
                <Text style={styles.FieldTypeText}>This month visits</Text>
    <Text style={styles.FieldText}>{this.thismonthvisits}</Text>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    UpperView:{
        flex: 0.2,
        backgroundColor: 'white'
    },
    SystemStatusText:{
        position: 'absolute',
        top: '35%',
        left:'12%',
        fontSize:20,
        color: 'black'
    },
    StatusBar:{
        height: '100%',
        width: '6%',
        backgroundColor: 'green',
        borderRadius: 10,
        borderWidth: 0.1,
        borderColor: 'black',
    },
    ActivityStatusView:{
        position: 'relative',
        top: '20%',
        left: '10%',
        height: '60%',
        width: '80%',
        backgroundColor:'lightgrey',
        borderRadius:10,
        borderColor: 'black',
        borderWidth: 0.2,
    },
    detailsView:{
        flex: 0.3,
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey',
    },
    detailsTitle:{
        position: 'relative',
        left: '5%',
        fontSize:28,
        fontWeight: 'bold',
        color: 'black'
    },
    detailsDescription: {
        flexShrink: 1,
        fontSize:16,
    },
    dataView:{
        flex:0.12,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey',
    },
    FieldTypeText: {
        position: 'relative',
        top: '30%',
        left: '5%',
        fontSize:20,
        color: 'grey'
    },
    FieldText: {
        position: 'absolute',
        top: '32%',
        left: '85%',
        fontSize:20,
        fontFamily: 'sans-serif'
    },
})
export default Statistics;