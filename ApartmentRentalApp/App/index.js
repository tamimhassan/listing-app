import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import {SigninAndSignupStack} from './navigators/StackNavigator';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    const authointicate = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        token ? setIsSignedIn(true) : setIsSignedIn(false);
      } catch (error) {
        console.log(error);
      }
    };
    authointicate();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f97f3f" />
      {isSignedIn === null ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : isSignedIn ? (
        <BottomTabNavigator />
      ) : (
        <SigninAndSignupStack />
      )}
    </NavigationContainer>
  );
};

export default App;
