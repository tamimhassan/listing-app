import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Apartment = ({apartment, handlePress}) => {
  console.log(apartment.name);
  return (
    <TouchableOpacity onPress={handlePress} style={styles.div}>
      <Text style={styles.text}>{apartment.name}</Text>
      <Text>{apartment.description}</Text>
      <Text>{apartment.floor_area_size}</Text>
      <Text>{apartment.location}</Text>
      <Text>{apartment.price_per_month}</Text>
    </TouchableOpacity>
  );
};

export default Apartment;

const styles = StyleSheet.create({
  div: {
    backgroundColor: 'gray',
    margin: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
