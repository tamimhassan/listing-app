import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Contain from '../components/Contain';
import Container from '../components/Container';
import CoustomButton from '../components/CoustomButton';
import Input from '../components/Input';
import InputWithIcon from '../components/InputWithIcon';
import InputIncDecNum from '../components/InputIncDecNum';

const CreateApartment = ({navigation}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState(0);
  const [floorSize, setfloorSize] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleCreate = () => {
    const apartment = {
      name: name.trim(),
      description,
      room,
      floor_size: floorSize,
      price_per_month: price,
    };

    console.log(apartment);
    setName('');
    setRoom(0);
    setfloorSize('');
    setPrice('');
    setDescription('');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Container>
        <Contain>
          <Input placeholder="Name" value={name} valueHandle={setName} />
        </Contain>
        <Contain>
          <InputWithIcon
            placeholder="Floor size"
            valueHandle={setfloorSize}
            value={floorSize}
            iconName="home"
            iconSize={18}
            iconcolor="#333"
            inputLastText="/sqft"
          />
        </Contain>
        <Contain>
          <InputWithIcon
            placeholder="Price"
            valueHandle={setPrice}
            value={price}
            iconName="dollar-sign"
            iconSize={18}
            iconcolor="#333"
            inputLastText="/month"
          />
        </Contain>
        <Contain>
          <InputIncDecNum
            title="Number of room"
            value={room}
            valueHandle={setRoom}
          />
        </Contain>
        <Contain>
          <Input
            placeholder="Address"
            value={address}
            valueHandle={setAddress}
          />
        </Contain>
        <Contain>
          <Input
            placeholder="Description"
            value={description}
            valueHandle={setDescription}
            numberOfLines={3}
          />
        </Contain>
        <Contain>
          <CoustomButton text="Create" handlePress={handleCreate} />
        </Contain>
      </Container>
    </ScrollView>
  );
};

export default CreateApartment;

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
  },
});
