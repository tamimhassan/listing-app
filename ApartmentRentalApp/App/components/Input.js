import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const Input = ({placeholder, valueHandle, value, label, numberOfLines}) => {
  return (
    <View>
      {/* <Text>{label}</Text> */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={v => valueHandle(v)}
        value={value}
        numberOfLines={numberOfLines}
        multiline={numberOfLines ? true : false}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    fontSize: 18,
    justifyContent: 'flex-start',
  },
});
