import React, { useState,  useEffect } from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity,ScrollView,FlatList, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '../data/firebase'
import constant from 'expo-constants';

const image1 = {uri: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};


const MealsPage = () => {

  const[users, setUsers] = useState(null)
  const uid = auth.currentUser.uid;
    
  const getUsers = async () => {
          const querySanp = await db.collection('meals').where('uid', '==', uid).get()
          const allusers = querySanp.docs.map(docSnap=>docSnap.data())
          console.log(allusers)
          setUsers(allusers)
  }

  useEffect(() => {
      getUsers()
  }, [])


const Item = ({ image, name, price }) => {
  return (
    <ScrollView >
    <View style={styles.listItem} >
        <Image source={{uri:image}} style={styles.img}/>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: "bold"}}>{name}</Text>
              <View style={{width: 230}}>
                <Text>{price}</Text>
              </View>
          </View>
    </View>
    </ScrollView>
  );
}


    return(
        <View style={styles.container}>
           <View style={styles.Top}>
                <Image source = {image1} resizeMode="stretch" style={styles.image1}/>
            <View  style={styles.HeadText}>
                <Text style={styles.TextRestaurant}>
                  Meals
                </Text>
            </View>
        </View>

        <FlatList 
            showsVerticalScrollIndicator={false}
              data={users}
              renderItem={({ item }) => {
                return(
                  <ScrollView>
                      <Item image={item.image} name={item.name} price={item.price}/>
                </ScrollView>)}
            }
                keyExtractor = {(item) => item.id}
            />
        </View>
    )
}
export default MealsPage;

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
      listItem: {
        paddingLeft: 5,
        paddingTop: 5,
        margin: 3,
        flex: 1,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
        borderWidth: 1
      },
      img: {
        height: 80,
        width: 80,
        borderRadius: 10
      }
})

