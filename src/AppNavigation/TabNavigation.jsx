import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Tab/Home';
import Search from '../Tab/Search';
import Notification from '../Tab/Notification';
import User from '../Tab/User';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarLabel: () => null}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={require('../../media/icon_home.png')}
              style={{
                width: size,
                height: size,
                tintColor: focused ? 'green' : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={require('../../media/icon_search.png')}
              style={{
                width: size,
                height: size,
                tintColor: focused ? 'green' : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={require('../../media/icon_notifile.png')}
              style={{
                width: size,
                height: size,
                tintColor: focused ? 'green' : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={require('../../media/icon_user.png')}
              style={{
                width: size,
                height: size,
                tintColor: focused ? 'green' : 'black',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
