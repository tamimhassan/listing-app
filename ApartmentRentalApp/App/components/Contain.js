import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

const Contain = ({children, bg, p}) => {
  console.log(p);
  const propsStyles = {
    backgroundColor: bg ? 'white' : undefined,
    padding: p ? p : undefined,
  };
  return (
    <ScrollView style={[styles.contain, propsStyles]}>{children}</ScrollView>
  );
};

export default Contain;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    marginVertical: 10,
  },
});
