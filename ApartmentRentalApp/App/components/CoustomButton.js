import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const CoustomButton = ({text, navigation, handlePress, navigateText}) => {
  return navigation ? (
    <TouchableHighlight onPress={() => navigation.navigate(navigateText)}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </View>
    </TouchableHighlight>
  ) : (
    <TouchableHighlight onPress={handlePress}>
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
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    minWidth: 200,
    backgroundColor: '#2388dc',
    // backgroundColor: 'gray',
    // backgroundColor: '#00b386',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  buttonText: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 20,
    color: 'white',
  },
});
