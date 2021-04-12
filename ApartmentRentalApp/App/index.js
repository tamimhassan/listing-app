import 'react-native-gesture-handler';
import React from 'react';
// import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {HomeStackScreen} from './navigators/StackNavigator';
import BottomTabNavigator from './navigators/BottomTabNavigator';
// import {SigninAndSignupStack} from './navigators/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}

      {/* <HomeStackScreen /> */}
      {/* <SigninAndSignupStack /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
