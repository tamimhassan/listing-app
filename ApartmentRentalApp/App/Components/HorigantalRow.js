import React from 'react';
import {StyleSheet, View} from 'react-native';

const HorigantalRow = () => {
  return <View style={styles.hr}></View>;
};

export default HorigantalRow;

const styles = StyleSheet.create({
  hr: {
    flex: 1,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
