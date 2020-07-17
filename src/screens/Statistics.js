import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as firebase from "firebase";


function parseDate(date){
    // parse the date into the format dd-mm-yyyy
    day = String(date.getDate());
    month = date.getMonth() +1;
    if (month < 10){
        month = "0" + String(month);
    }
    else{
        month = String(month);
    }
    year = String(date.getFullYear());
    parsedDate = day + "-" + month + "-" + year;
    return parsedDate;
}


function getMonthlyVisits(visitsDocument){
    //calculate the monthly visits summing the ones of the current month
    currentDate = new Date();
    currentMonth = currentDate.getMonth() +1;
    var monthlyVisits = 0;
    visitsDocument.forEach(function(visit) {
        var key = visit.key;
        var keyMonth = key.substring(3,5);
        if (keyMonth == currentMonth){
            monthlyVisits += visit.val();
        }
    })
    return monthlyVisits;
}

function Statistics({navigation}){
        var userRef = firebase.database().ref(firebase.auth().currentUser.uid).on('value', (snapshot) => {
            const userObj = snapshot.val();
            this.activitydescription = userObj.activitydescription;
            this.activityname = userObj.activityname;
            var dateOfToday = parseDate(new Date());
            var visits = snapshot.child('visits');
            visits.forEach(function(visit) {
                var key = visit.key;
                if (key === dateOfToday){
                    this.todayvisits = visit.val();
                }
             });
             this.thismonthvisits = getMonthlyVisits(visits);
          });
    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.UpperView}>
                <View style={styles.ActivityStatusView}>
                    <View style={styles.StatusBar}/>
                    <Text style={styles.SystemStatusText}>The system is active</Text>
                </View>
            </View>
            
            <View style={styles.detailsView}>
                <View style={{flex: 0.2, width:'90%'}}>
                    <Text style={styles.detailsTitle}>Activity Details</Text>
                </View>
                <View style={{flex: 0.2, width:'90%', flexDirection: 'column-reverse'}}>
                    <Text style={styles.ActivityName}>{this.activityname}</Text>
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
        fontSize:28,
        fontWeight: 'bold',
        color: 'black'
    },
    ActivityName:{
        fontSize:22,
        color: 'black'
    },
    detailsDescription: {
        flexShrink: 1,
        fontSize:11,
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