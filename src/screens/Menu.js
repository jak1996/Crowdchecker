
import { View, StyleSheet, Text, Image, TouchableHighlight, Alert} from 'react-native';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

function Menu({navigation}){

    return(
        <View style={{flex: 1, backgroundColor:'white'}}>
            <View style={styles.profileView}>
                <Image source={require('../../assets/cr7.jpg')} style={styles.img}></Image>
                <Text style={styles.profileText}>Profile</Text>
                <TouchableHighlight style={styles.arrowRightButton} onPress={() => alert()}>
                     <Image style = {styles.arrowRightImage} source={require('../../assets/arrow_right.png')}></Image>
                </TouchableHighlight>
            </View>
            <View style={styles.homeView}>
                <Text style={{alignItems: 'center', justifyContent: 'center'}}>Home</Text>
            </View>
            <View style={styles.systemSettingsView}>
                <TouchableHighlight style={styles.menuOptionButton} onPress={() => alert()}>
                     <Image style = {styles.menuOptionImage} source={require('../../assets/levels.png')}></Image>
                </TouchableHighlight>
                <Text style={styles.menuOptionText}>System settings</Text>
            </View>
            <View style={styles.statisticsView}>
                <TouchableHighlight style={styles.menuOptionButton} onPress={() => alert()}>
                     <Image style = {styles.menuOptionImage} source={require('../../assets/statistics.png')}></Image>
                </TouchableHighlight>
                <Text style={styles.menuOptionText}>Statistics</Text>
            </View>
            <View style={styles.appSettingsView}>
                <TouchableHighlight style={styles.menuOptionButton} onPress={() => alert()}>
                     <Image style = {styles.menuOptionImage} source={require('../../assets/settings-icon.png')}></Image>
                </TouchableHighlight>
                <Text style={styles.menuOptionText}>App settings</Text>
            </View>
            <View style={styles.logoutView}>
                <TouchableHighlight style={styles.menuOptionButton} onPress={() => navigation.navigate('Login')}>
                     <Image style = {styles.menuOptionImage} source={require('../../assets/logout.png')}></Image>
                </TouchableHighlight>
                <Text style={styles.menuOptionText}>Logout</Text>
            </View>
        </View>
    );
}


const styles= StyleSheet.create({
    profileView:{
        flex: 0.15,
        backgroundColor:'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    img:{
        position: 'relative',
        left: '5%',
        top: '15%',
        height: 80,
        width: 80,
        borderRadius:50,
        borderColor: 'green',
        borderWidth: 2,
    },
    profileText:{
        position: 'absolute',
        top: '35%',
        left: '30%',
        fontSize:22,
        color: 'black',
        fontFamily: 'sans-serif'
    },
    arrowRightButton:{
        position: 'absolute',
        top: '35%',
        left: '85%',
        alignItems: 'flex-end',

    },
    arrowRightImage:{
        height: 40,
        width: 40,
    },
    homeView:{
        flex: 0.1,
        backgroundColor:'white'
    },
    systemSettingsView:{
        flex: 0.1,
        backgroundColor:'white'
    },
    menuOptionButton:{
        backgroundColor:'white',
        alignItems: 'flex-start',
        height: 50,
        width: 50,
        top: '15%',
        left: '7%',
    },
    menuOptionImage:{
        height: 50,
        width: 50,
    },
    menuOptionText:{
        position: 'absolute',
        top: '32%',
        left: '26%',
        fontSize:20,
        color: 'black',
        fontFamily: 'sans-serif'
    },
    statisticsView:{
        flex: 0.1,
        backgroundColor:'white'
    },
    appSettingsView:{
        flex: 0.1,
        backgroundColor:'white'
    },
    logoutView:{
        position: 'relative',
        top: '30%',
        flex: 0.1,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    }
})

export default Menu;