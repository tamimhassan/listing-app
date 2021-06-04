import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../components/Container';
import CoustomButton from '../components/CoustomButton';
import InputIncDecNum from '../components/InputIncDecNum';
import NewInput from '../components/NewInput';
import MapLocationPick from '../components/MapLocationPick';
import Div from '../components/Div';

import {BASE_URL} from '../enviro';

const CreateApartment = ({navigation}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState(0);
  const [floorSize, setfloorSize] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [region, setRegion] = useState({
    latitude: 23.80740310653541,
    longitude: 90.36997402086854,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const addressHandler = () => {
    setShowMap(true);
  };

  const sendData = async (apartment, userId) => {
    await fetch(`${BASE_URL}/apartment/new/${userId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apartment),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          Alert.alert('Error', data.error);
        } else {
          console.log('Apartment created!');
          navigation.navigate('feed');
        }
      })
      .catch(error => {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
      });
  };

  const handleCreate = async () => {
    const apartment = {
      name: name.trim(),
      floor_size: floorSize.trim(),
      price_per_month: price.trim(),
      room: room,
      location: {
        geolocation: {
          coordinates: [region.longitude, region.latitude],
        },
        formattedAddress: address.trim(),
      },
      description: description.trim(),
    };

    try {
      const userId = await AsyncStorage.getItem('userId');
      sendData(apartment, userId);
    } catch (error) {
      console.log(error);
    }
  };

  return showMap ? (
    <MapLocationPick
      value={region}
      handleValue={setRegion}
      selectHandler={() => {
        setShowMap(false);
      }}
    />
  ) : (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Container>
        <Div mv={10}>
          <NewInput
            label="Name"
            placeholder="Mirpur DOSH"
            value={name}
            valueHandle={setName}
            iconName="home"
            iconSize={20}
            iconcolor="#ff0000"
          />
        </Div>
        <Div mv={10}>
          <NewInput
            label="Floor size (in sqft)"
            placeholder="example:(1200, ..)"
            value={floorSize}
            valueHandle={setfloorSize}
            iconName="th-large"
            iconSize={20}
            iconcolor="#ff0000"
            takeNumberFromKeyboard
          />
        </Div>
        <Div mv={10}>
          <NewInput
            label="Price per month"
            placeholder="100"
            value={price}
            valueHandle={setPrice}
            iconName="dollar-sign"
            iconSize={20}
            iconcolor="#ff0000"
            takeNumberFromKeyboard
          />
        </Div>
        <Div mv={10}>
          <InputIncDecNum
            title="Number of room"
            value={room}
            valueHandle={setRoom}
          />
        </Div>
        <Div mv={10}>
          <NewInput
            label="Address"
            placeholder="house 5, road 6, block A, Mirpur 10, Dhaka, Bangladesh"
            value={address}
            valueHandle={setAddress}
            iconName="map-marker-alt"
            iconSize={20}
            iconcolor="#ff0000"
          />
        </Div>

        <Div mv={10}>
          <NewInput
            label="Location from map"
            value={`lat: ${region.latitude}, lng: ${region.longitude}`}
            showMap={addressHandler}
            iconName="map-marked-alt"
            fontSize={14}
            iconSize={20}
            iconcolor="#ff0000"
            location
          />
        </Div>
        <Div mv={10}>
          <NewInput
            label="Description"
            value={description}
            valueHandle={setDescription}
            placeholder="Write some details about this apartment..."
            iconName="keyboard"
            iconSize={20}
            iconcolor="#ff0000"
            numberOfLines={3}
          />
        </Div>
        <Div mv={10}>
          <CoustomButton text="Create" handlePress={handleCreate} />
        </Div>
      </Container>
    </ScrollView>
  );
};

export default CreateApartment;

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    backgroundColor: 'white',
  },
});
