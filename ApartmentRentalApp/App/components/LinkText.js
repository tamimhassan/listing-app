import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

const LinkText = ({text, float, underlineText, navigation, navigateText}) => {
  const propsStyle = {
    justifyContent:
      float === 'right'
        ? 'flex-end'
        : float === 'left'
        ? 'flex-start'
        : 'center',
  };
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(navigateText)}>
      <View style={[styles.view, propsStyle]}>
        <Text style={styles.text}>{text} </Text>
        <Text style={styles.underline}>{underlineText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LinkText;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#0074ab',
  },
  underline: {
    borderBottomWidth: 1,
  },
});
