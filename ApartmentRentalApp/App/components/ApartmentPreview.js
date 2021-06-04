import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Apartment = ({apartment, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.div}>
      <Text style={styles.text}>
        {apartment.name.length > 15
          ? `${apartment.name.slice(0, 12)}...`
          : apartment.name}
      </Text>
      <Text style={styles.bold}>
        {apartment.floor_size ? `${apartment.floor_size} sqft` : undefined}
      </Text>
      <Text>{apartment.location.formattedAddress}</Text>
      <Text style={styles.bold}>
        {apartment.price_per_month
          ? `$${apartment.price_per_month}`
          : undefined}
      </Text>
      <Text style={styles.notButton}>Click to see details</Text>
    </TouchableOpacity>
  );
};

export default Apartment;

const styles = StyleSheet.create({
  div: {
    backgroundColor: 'rgb(0,122, 255)',
    margin: 7,
    padding: 10,
    minWidth: 200,
    minHeight: 150,
    borderRadius: 4,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  notButton: {
    padding: 10,
    marginTop: 5,
    fontSize: 17,
    color: 'white',
    borderRadius: 3,
    textAlign: 'center',
    backgroundColor: 'skyblue',
  },
});
