import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

const Container = ({children}) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});
