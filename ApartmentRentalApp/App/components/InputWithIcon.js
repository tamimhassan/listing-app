import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Input = ({
  placeholder,
  valueHandle,
  value,
  label,
  numberOfLines,
  iconName,
  iconSize,
  iconcolor,
  inputLastText,
}) => {
  return (
    <View style={styles.inputContainer}>
      {/* <Text>{label}</Text> */}
      <FontAwesome
        name={iconName}
        size={iconSize}
        color={iconcolor}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={v => valueHandle(v)}
        value={value}
        numberOfLines={numberOfLines}
        multiline={numberOfLines ? true : false}
      />
      <Text style={styles.text}>{inputLastText}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  icon: {},
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 18,
  },
  text: {
    fontSize: 18,
  },
});
