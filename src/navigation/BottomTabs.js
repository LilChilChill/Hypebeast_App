import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Payment, Heart, Search, User, Cart } from '../screens';
import Icons from '../themes/Icons';
import Colors from '../themes/Colors';
import { TabActions } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: Colors.black_focus,
      tabBarStyle: {
        height: 55,
        paddingTop: 5,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,

      },
      tabBarShowLabel: false,
    }}>
      <Tab.Screen
        name="Wish"
        component={Heart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'heart_focus' : 'heart', height: 30, width: 30 })}
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'search_focus' : 'search', height: 30, width: 30 })}
            </View>
          )
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'home_focus' : 'home', height: 30, width: 30 })}
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'cart_focus' : 'cart', height: 30, width: 30 })}
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Infor"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'user_focus' : 'user', height: 30, width: 30 })}
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
} 