import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {HomeStackScreen} from './navigators/StackNavigator';
import BottomTabNavigator from './navigators/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <HomeStackScreen /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
