import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ApartmentPreview from '../components/ApartmentPreview';

const Home = ({navigation}) => {
  const [apartments, setApartments] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  console.log(apartments);

  const fetchApartments = useCallback(async () => {
    await fetch('http://192.168.1.14:8080/apartments', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setApartments(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchApartments();
  }, [fetchApartments]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchApartments();
  }, [fetchApartments]);

  return (
    <FlatList
      data={apartments}
      keyExtractor={item => item._id}
      renderItem={({item}) => (
        <ApartmentPreview
          handlePress={() => navigation.navigate('Apartment', item)}
          apartment={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={() => handleRefresh}
    />
  );
};

export default Home;

const styles = StyleSheet.create({});
