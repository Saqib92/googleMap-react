/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      markers: [{
        title: 'hello',
        coordinates: {
          latitude: 24.8654069,
          longitude: 67.0823004
        },
      },
      {
        title: 'avari',
        coordinates: {
          latitude: 24.8527251,
          longitude: 67.0301092
        },  
      }]
    }
  }

  render() {
    return (
     
        <MapView
        style={styles.map}
          region={{
            latitude: 24.946218,
            longitude: 67.005615,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >

        {this.state.markers.map(marker => (
            <MapView.Marker 
              coordinate={marker.coordinates}
              title={marker.title}
            />
          ))}
        </MapView>
        
      
    );
  }
}

const styles = StyleSheet.create({
  map:{
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1
  }
});
