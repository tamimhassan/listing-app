import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import CustomText from '../components/CustomText';
import Div from '../components/Div';

const Apartment = ({route}) => {
  console.log(route.params);

  const {
    available,
    room,
    floor_size,
    price_per_month,
    description,
    location,
  } = route.params;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Div m={15} mv={10}>
        <View>
          <Text style={styles.title}>Apartment Images</Text>
        </View>
        <View style={styles.contain}>
          <Image
            source={require('../assets/images/apartment_1.jpg')}
            style={styles.img}
            resizeMode={'cover'}
          />
        </View>
      </Div>

      <Div m={15} mv={10}>
        <Text style={styles.title}>Apartment details</Text>
        <View style={styles.contain}>
          <CustomText
            normalText={'Status: '}
            boldText={available ? 'available' : 'Not available'}
          />
          <CustomText normalText={'Total room: '} boldText={room} />
          <CustomText
            normalText={'Apartment size: '}
            boldText={floor_size ? `${floor_size} sqft` : 'Not given'}
          />
          <CustomText
            normalText={'Monthly rental: '}
            boldText={price_per_month ? `$${price_per_month}` : 'Not given'}
          />
          <CustomText
            normalText={'Address: '}
            boldText={location ? location.formattedAddress : 'Not given'}
          />
          <CustomText normalText={'Description: '} boldText={description} />
        </View>
      </Div>
    </ScrollView>
  );
};

export default Apartment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },

  title: {
    fontSize: 17,
    color: '#555',
    marginVertical: 5,
    fontWeight: 'bold',
  },

  contain: {
    padding: 8,
    elevation: 8,
    borderRadius: 4,
    shadowRadius: 10,
    shadowOpacity: 0.26,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
  },

  img: {width: '100%', height: 280},
});
