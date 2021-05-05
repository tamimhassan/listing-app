import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

const InputIncDecNum = ({value, valueHandle, title}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.text, styles.title]}>{title}</Text>
      <View style={styles.input}>
        <TouchableWithoutFeedback
          onPress={() => (value === 0 ? null : valueHandle(value - 1))}>
          <View style={styles.icon}>
            <Text style={styles.iconText}>-</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>{value}</Text>
        <TouchableWithoutFeedback onPress={() => valueHandle(value + 1)}>
          <View style={styles.icon}>
            <Text style={styles.iconText}>+</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default InputIncDecNum;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'right',
  },
  icon: {
    marginHorizontal: 25,
    borderWidth: 1,
    borderColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    borderRadius: 42,
  },
  title: {
    flex: 1,
  },
  iconText: {
    color: '#ff0000',
    fontSize: 30,
  },
  text: {
    fontSize: 17,
  },
});
