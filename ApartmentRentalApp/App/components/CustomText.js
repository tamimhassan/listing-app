import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CustomText = ({normalText, boldText, size}) => {
  const propsStyles = {
    fontSize: size ? size : 15,
  };

  return (
    <View style={styles.div}>
      <Text>
        <Text style={propsStyles}>{normalText}</Text>
        <Text style={[styles.boldText, propsStyles]}>
          {boldText ? boldText : 'Not given'}
        </Text>
      </Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  div: {
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
