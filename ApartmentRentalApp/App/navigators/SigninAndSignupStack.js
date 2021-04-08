import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

function SigninAndSignupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign in" component={SignIn} />
      <Stack.Screen name="Sign up" component={SignUp} />
    </Stack.Navigator>
  );
}

export default SigninAndSignupStack;
