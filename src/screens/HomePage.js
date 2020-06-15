import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableHighlight, Image} from 'react-native';
import MapView from 'react-native-maps';
import { SearchBar } from 'react-native-elements';



function Homepage(props){

    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.upperView}>
                <Text style={styles.title}>CrowdChecker</Text>
                <TouchableHighlight>
                    <Image style={styles.img} source={require('../../assets/menu.png')}></Image>
                </TouchableHighlight>
            </View>
            <MapView style={styles.mapView}
                initialRegion={{latitude: 45.4626482, longitude: 9.0376489, latitudeDelta: 0.0922, longitudeDelta: 0.0421,}} />
            <View style={styles.lowerView}>
                <SearchBar
                searchIcon={{ size: 24 }}
                placeholder="Type Here..."
                ></SearchBar> 
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1,
    },
    img: {
        position: 'absolute',
        top: 15,
        left: 20,
        height: 35,
        width: 35,
    },
    upperView: {
        backgroundColor:'white',
        flex: 0.12,
    },
    mapView: {
        flex: 1,
    },
    lowerView: {
        backgroundColor:'white',
        flex: 0.2,
    },
    title: {
        position:'absolute',
        left: 110,
        top: 10,
        fontSize:30,
        color: 'green',
        fontFamily: 'sans-serif'
    },
    searchBar: {
        position: 'absolute',
        top: 80,
        left: 55,
        padding: 10,
        width: 300,
        borderWidth: 1,
        borderColor: '#777'
    }
})

export default Homepage;