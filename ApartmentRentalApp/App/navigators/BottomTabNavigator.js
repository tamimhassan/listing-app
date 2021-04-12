import React from 'react';
// import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feed from '../screens/Feed';
import {ProfileStackScreen} from '../navigators/StackNavigator';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="ProfileStackScreen">
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStackScreen"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
