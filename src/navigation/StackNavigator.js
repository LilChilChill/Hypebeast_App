import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart, HomeScreen, Search, } from '../screens';
import BottomTabs from './BottomTabs';
import ProductDetail from '../screens/HomeScreen/ProductDetail';
import Detail from "../screens/HomeScreen/Detail"
import Payment from "../screens/Payment/Payment"
import PaymentSuccess from '../screens/Payment/PaymentSuccess';
import Login from '../screens/User/Login';
import SignUp from '../screens/User/SignUp';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetail}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="User" component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack; 