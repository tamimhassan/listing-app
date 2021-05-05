import React from 'react';
import {View} from 'react-native';

const Div = ({children, bg, p, m, mv, mb, style}) => {
  const propsStyles = {
    backgroundColor: bg ? bg : 'white',
    padding: p ? p : undefined,
    margin: m ? m : undefined,
    marginBottom: mb ? mb : undefined,
    marginVertical: mv ? mv : undefined,
  };

  return <View style={[propsStyles, style]}>{children}</View>;
};

export default Div;
