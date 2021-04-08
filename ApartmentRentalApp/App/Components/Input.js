import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder, valueHandle, value}) => {
  // const [text, setText] = useState('');
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={v => valueHandle(v)}
      value={value}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    fontSize: 18,
  },
});
