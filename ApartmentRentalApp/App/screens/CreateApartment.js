import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Container from '../components/Container';
import CoustomButton from '../components/CoustomButton';
import InputIncDecNum from '../components/InputIncDecNum';
import NewInput from '../components/NewInput';
import MapLocationPick from '../components/MapLocationPick';
import Div from '../components/Div';

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

  const handleCreate = () => {
    const apartment = {
      name: name.trim(),
      description: description.trim(),
      room,
      floor_size: floorSize,
      price_per_month: price,
      address,
      location: {
        latitude: region.latitude,
        longitude: region.longitude,
      },
    };

    console.log(apartment);
    // setName('');
    // setRoom(0);
    // setfloorSize('');
    // setPrice('');
    // setAddress('');
    // setDescription('');
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
            iconName="square-full"
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
