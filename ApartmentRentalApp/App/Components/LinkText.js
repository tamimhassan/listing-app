import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LinkText = ({text}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default LinkText;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#0074ab',
  },
});
