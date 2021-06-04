import React from 'react';
// import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  FeedStackScreen,
  ProfileStackScreen,
} from '../navigators/StackNavigator';

const Tab = createBottomTabNavigator();

const hideTabBarIn = ['Apartment', 'createApartment', 'settings'];

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return hideTabBarIn.includes(routeName) ? false : true;
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {height: 60},
      }}>
      <Tab.Screen
        name="FeedStackScreen"
        component={FeedStackScreen}
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
        options={({route}) => ({
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
