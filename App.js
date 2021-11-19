import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './Screens/LandingPage';
import RegisterPage from './Screens/RegisterPage';
import LoginPage from './Screens/LoginPage';
import HomePage from './Screens/HomePage';
import UpdatePage from './Screens/Update';
import MenuPage from './Screens/Menu';
import MealsPage from './Screens/Meals';
import Drinks from './Screens/Drinks';
import Profile from './Screens/Profile';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "LandingPage" component={LandingPage} options= {{headerShown: false}}/>
        <Stack.Screen name= "RegisterPage" component={RegisterPage} options= {{headerShown: false}}/>
        <Stack.Screen name= "LoginPage" component={LoginPage} options= {{headerShown: false}}/>
        <Stack.Screen name= "Home" component={HomePage} options= {{headerShown: false}}/>
        <Stack.Screen name= "UpdatePage" component={UpdatePage} options= {{headerShown: false}}/>
        <Stack.Screen name= "MenuPage" component={MenuPage} options= {{headerShown: false}}/>
        <Stack.Screen name= "MealsPage" component={MealsPage} options= {{headerShown: false}}/>
        <Stack.Screen name= "Drinks" component={Drinks} options= {{headerShown: false}}/>
        <Stack.Screen name= "Profile" component={Profile} options= {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default  MyStack;