import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Apartment = ({route}) => {
  console.log(route.params);
  return (
    <View>
      <Text>Apartment</Text>
    </View>
  );
};

export default Apartment;

const styles = StyleSheet.create({});
