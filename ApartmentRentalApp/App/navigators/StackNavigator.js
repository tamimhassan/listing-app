import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Apartment from '../screens/Apartment';
import CreateApartment from '../screens/CreateApartment';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const SigninAndSignupStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign in" component={SignIn} />
      <Stack.Screen name="Sign up" component={SignUp} />
      <Stack.Screen name="Forgot password" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="Apartment"
        component={Apartment}
        options={({route}) => ({title: route.params.name})}
      />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
      <ProfileStack.Screen
        name="CreateApartment"
        component={CreateApartment}
        options={{title: 'Create Apartment'}}
      />
    </ProfileStack.Navigator>
  );
};

export {SigninAndSignupStack, HomeStackScreen, ProfileStackScreen};
