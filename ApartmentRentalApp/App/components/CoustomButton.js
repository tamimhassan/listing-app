import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const CoustomButton = ({text, navigation, handlePress, navigateText}) => {
  return (
    <TouchableHighlight
      onPress={
        navigation ? () => navigation.navigate(navigateText) : handlePress
      }
      style={styles.newbutton}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CoustomButton;

const styles = StyleSheet.create({
  newbutton: {
    width: '100%',
    alignItems: 'center',
    // elevation: 60,
    borderRadius: 5,
    backgroundColor: '#f97f3f',
    overflow: 'hidden',
  },
  button: {
    width: '100%',
  },
  buttonText: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 20,
    color: 'white',
  },
});
