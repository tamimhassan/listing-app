import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const IconText = ({iconName, iconSize, iconcolor, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome name={iconName} size={iconSize} color={iconcolor} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default IconText;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    marginLeft: 15,
    color: '#495057',
  },
});
