import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import ForgotPassword from '../screens/ForgotPassword';

import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import Apartment from '../screens/Apartment';
import CreateApartment from '../screens/CreateApartment';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();
const FeedStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const SigninAndSignupStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Sign in" component={SignIn} />
      <Stack.Screen name="Sign up" component={SignUp} />
      <Stack.Screen name="Forgot password" component={ForgotPassword} />
      <Stack.Screen name="Reset password" component={ResetPassword} />
    </Stack.Navigator>
  );
};

const FeedStackScreen = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="feed"
        component={Feed}
        options={{headerShown: false}}
      />
      <FeedStack.Screen
        name="Apartment"
        component={Apartment}
        options={({route}) => ({title: route.params.name})}
      />
    </FeedStack.Navigator>
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
        name="createApartment"
        component={CreateApartment}
        options={{title: 'Create Apartment'}}
      />
      <ProfileStack.Screen name="settings" component={Settings} />
    </ProfileStack.Navigator>
  );
};

export {SigninAndSignupStack, FeedStackScreen, ProfileStackScreen};
