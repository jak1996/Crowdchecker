import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableHighlight, Image, Button} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SearchBar } from 'react-native-elements';


function Homepage({navigation}){

    navigation.setOptions({
        headerLeft: () => (
          <TouchableHighlight style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
            <Image style = {styles.img} source={require('../../assets/menu.png')}></Image>
          </TouchableHighlight>
        ),
      });
    
    return(
        <SafeAreaView style={styles.background}>
            <MapView style={styles.mapView} 
                initialRegion={{latitude: 45.4642200, longitude: 9.1905600, latitudeDelta: 0.0922, longitudeDelta: 0.0421,}}>
                    <Marker coordinate={{ latitude: 45.465844, longitude: 9.191561}}
                pinColor="green"
                />
                <Marker coordinate={{ latitude: 45.465673, longitude: 9.191439}}
                pinColor="green"
                />
                <Marker coordinate={{ latitude: 45.465805, longitude: 9.191665}}
                pinColor="green"
                />
                <Marker coordinate={{ latitude: 45.460157, longitude: 9.167233}}
                pinColor="green"
                />
                <Marker coordinate={{ latitude: 45.477697, longitude: 9.188633}}
                pinColor="green"
                />
                </MapView>
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
    mapView: {
        flex: 1,
    },
    lowerView: {
        backgroundColor:'white',
        flex: 0.2,
    },
    menuButton:{
        top: 3,
        left:10,
        backgroundColor:'white',
        height: 50, 
        width: 50,
    },
    img:{
        top: 5,
        left: 5,
        height:35,
        width: 35,
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