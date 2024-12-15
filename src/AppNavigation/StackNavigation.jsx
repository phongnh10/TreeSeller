import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Stack/Authentication/Login';
import TabNavigation from './TabNavigation';
import ProductDetail from '../Stack/Item/ProductDetail';
import Order from '../Stack/Screens/Order';
import Payment from '../Stack/Screens/Payment';
import UpdateProfile from '../Stack/Screens/UpdateProfile';
import Questions from '../Stack/Screens/Questions';
import History from '../Stack/Screens/History';
import Register from '../Stack/Authentication/Register';
import Home from '../Tab/Home';
import Product from '../../src/Stack/Item/Product';
import Planta from '../Stack/Item/Planta';

const Stack = createNativeStackNavigator();
const StackNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="StackAuthentication" component={StackAuthentication} />
    <Stack.Screen name="TabNavigation" component={TabNavigation} />
    <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Order" component={Order} />
    <Stack.Screen name="ProductDetail" component={ProductDetail} />
    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="History" component={History} />
    <Stack.Screen name="Product" component={Product} />
    <Stack.Screen name="Questions" component={Questions}></Stack.Screen>
    <Stack.Screen name="Planta" component={Planta}></Stack.Screen>
  </Stack.Navigator>
);
export default StackNavigation;

const StackAuthentication = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={Login}
        screenOptions={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Register"
        component={Register}
        screenOptions={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

const StackBuyProduct = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Order" component={Order}></Stack.Screen>
      <Stack.Screen
        name="ProducDetail"
        component={ProductDetail}></Stack.Screen>
      <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
      <Stack.Screen name="History" component={History}></Stack.Screen>
    </Stack.Navigator>
  );
};

const StackSupport = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Questions" component={Questions}></Stack.Screen>
    </Stack.Navigator>
  );
};

const StackUser = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}></Stack.Screen>
    </Stack.Navigator>
  );
};

const AllStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Order" component={Order}></Stack.Screen>
      <Stack.Screen
        name="ProducDetail"
        component={ProductDetail}></Stack.Screen>
      <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
      <Stack.Screen name="History" component={History}></Stack.Screen>
      <Stack.Screen name="Product" component={Product}></Stack.Screen>
    </Stack.Navigator>
  );
};
