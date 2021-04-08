import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SigninAndSignupStack from './navigators/SigninAndSignupStack';

const App = () => {
  return (
    <NavigationContainer>
      <SigninAndSignupStack />
    </NavigationContainer>
  );
};

export default App;
