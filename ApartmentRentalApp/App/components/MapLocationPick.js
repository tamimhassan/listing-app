import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import Div from './Div';
import CoustomButton from '../components/CoustomButton';

const MapLocationPick = ({value, handleValue, selectHandler}) => {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={value}
        showsUserLocation
        loadingEnabled
        onRegionChange={r => handleValue(r)}>
        <Marker
          draggable
          pinColor="orange"
          coordinate={{
            latitude: value.latitude,
            longitude: value.longitude,
          }}
        />
      </MapView>
      <View style={styles.contain}>
        <Div m={10} style={styles.div}>
          <Text style={styles.text}>Latitude: {value.latitude}</Text>
          <Text style={styles.text}>Longitude: {value.longitude}</Text>
        </Div>
        <Div m={10}>
          <CoustomButton text="Select" handlePress={selectHandler} />
        </Div>
      </View>
    </View>
  );
};

export default MapLocationPick;

const styles = StyleSheet.create({
  map: {
    height: '100%',
    backgroundColor: 'white',
  },
  contain: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  div: {
    marginVertical: 0,
  },
  text: {
    padding: 5,
    backgroundColor: 'orange',
    textAlign: 'center',
    color: 'white',
  },
});
