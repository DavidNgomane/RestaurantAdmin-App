import React, { useState,  useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ScrollView,FlatList, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '../data/firebase'
import constant from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';


const image1 = {uri: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const MenuPage = ({navigation}) => {
    return(
        <View style={styles.container}>
           <View style={styles.Top}>
                <Image source = {image1} resizeMode="stretch" style={styles.image1}/>
            <View  style={styles.HeadText}>
                <Text style={styles.TextRestaurant}>
                  Menu
                </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('MealsPage')} style={{justifyContent: "center", alignItems: "center", mariginBottom: 30}}>
              <Text>Meals</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Drinks')}>
              <Text>Drinks</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}
export default MenuPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       height: "100%",
       width: "100%"
    },
    Top:{
        marginTop: constant.statusBarHeight,
        height: 150,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      },
      image1: {
        flex: 1, 
        justifyContent: "center", 
        borderBottomRightRadius: 20, 
        borderBottomLeftRadius: 20
      },
      HeadText:{
        marginTop: -60,
        justifyContent: "center",
        textAlign: "center",
        alignSelf: "center",
        height: 80,
      },
      TextRestaurant:{
        fontSize: 40,
        color: "white",
        height: 150,
      },
})

