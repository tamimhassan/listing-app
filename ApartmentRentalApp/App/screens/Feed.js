import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
const city = [
  {id: 1, name: 'Mirpur 11'},
  {id: 2, name: 'Dhanmondi'},
  {id: 3, name: 'Gulshan'},
  {id: 4, name: 'Mirpur DOSH'},
  {id: 5, name: 'Barisdhara DOSH1'},
  {id: 6, name: 'Muhammadpur'},
  {id: 7, name: 'Gulshan Dosh'},
];

const Feed = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />
      </MapView>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search area"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={styles.input}
        />
        <Icon name="search" size={20} color="#666" />
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        style={styles.areaScrollView}
        showsHorizontalScrollIndicator={false}
        contentInset={{top: 0, bottom: 0, left: 0, right: 20}}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0,
        }}>
        {city.map(item => (
          <TouchableOpacity key={item.id} style={styles.areaItem}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
  },
  searchBox: {
    position: 'absolute',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {flex: 1, padding: 0, fontSize: 17},
  areaScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10,
  },
  areaItem: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
