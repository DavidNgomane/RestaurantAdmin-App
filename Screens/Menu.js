import React, { useState,  useEffect } from 'react';
import { Text, View, StyleSheet, useWindowDimensions, TouchableOpacity,ScrollView,FlatList, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '../data/firebase'
import constant from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import Drinks from './Drinks'
import MealsPage from './Meals';
import { TabView, SceneMap } from 'react-native-tab-view';

const image1 = {uri: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const MealsRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081', height: 100}}>
    <MealsPage/>
  </View>
);

const DrinksRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7',  height: 100}}>
    <Drinks/>
  </View>
);

const renderScene = SceneMap({
  meals: MealsRoute,
  drinks: DrinksRoute,
});

const MenuPage = ({navigation}) => {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'meals', title: 'Meals' },
    { key: 'drinks', title: 'Drinks' },
  ])

    return(
        <View style={styles.container}>
          <TabView 
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
         />
        </View>
    )
}
export default MenuPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       height: "100%",
       width: "100%",
    },
})

