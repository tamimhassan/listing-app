import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

const Contain = ({children}) => {
  return <ScrollView style={styles.contain}>{children}</ScrollView>;
};

export default Contain;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    marginVertical: 15,
  },
});
