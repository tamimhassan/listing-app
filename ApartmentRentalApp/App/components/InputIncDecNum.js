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
            <View>
              <Text style={styles.iconText}>+</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default InputIncDecNum;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 5,
    paddingVertical: 15,
    width: '100%',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'right',
  },
  icon: {
    marginHorizontal: 12,
    borderWidth: 2,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 40,
    width: 40,
    // paddingHorizontal: 12,
    // paddingVertical: ,
    borderRadius: 40,
  },
  title: {
    flex: 1,
  },
  iconText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
  },
});
