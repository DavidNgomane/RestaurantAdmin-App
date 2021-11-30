import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList,ScrollView,  TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { auth, db, storageRef, fb} from '../data/firebase'

export default function Profile ({navigation}) {
    const[users, setUsers] = useState(null)
    const [image, setImage] = useState('');
    const uid = auth.currentUser.uid;
    
    const getUsers = async () => {
            const querySanp = await db.collection('admin').where('uid', '==', uid).get()
            const allusers = querySanp.docs.map(docSnap=>docSnap.data())
            console.log(allusers)
            setUsers(allusers)
    }
  
    useEffect(() => {
        getUsers()
    }, [])
  
  
  const Item = ({ image, name, email }) => {
    return (
      <ScrollView >
      <View style={styles.listItem} >
          <Image source={{uri:image}} style={styles.img}/>
            <View style={{marginLeft: 10, justifyContent: "center", alignItems: "center"}}>
              <Text style={{fontWeight: "bold"}}>{name}</Text>
                <View style={{width: 230, justifyContent: "center", alignItems: "center"}}>
                  <Text>{email}</Text>
                </View>
            </View>
      </View>
      </ScrollView>
    );

    const signOut = () => {
        auth.signOut().then(() => {
             // Sign-out successful.
             navigation.replace('LandingPage')
           }).catch((error) => {
             // An error happened.
             alert(error)
           });
     }
}
    return (
        <View style={styles.container}>
           <Text style={{textAlign: "center", color: "#5f9ea0", fontSize: 25, marginBottom: 10, marginTop: 40}}>
             Update Restaurant Profile
             </Text>
            <View>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={users}
                    renderItem={({ item }) => {
                        return(
                        <ScrollView>
                            <Item image={item.image} name={item.name} email={item.email}/>
                        </ScrollView>)}
                    }
                        keyExtractor = {(item) => item.id}
                />
            </View>

            <View style={{ justifyContent: "center", marginTop: 15}}>
                <TouchableOpacity style={styles.menuButton}  onPress = {() => navigation.navigate("UpdatePage")}>
                  <Text style={styles.menuText}>Update Details</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton}  onPress = {() => navigation.navigate("LandingPage")}>
                  <Text style={styles.menuText}>Sign Out</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Tab}>
                <FontAwesome name="home" size={24} color="white"  style={{marginLeft: 70}} onPress = {() => navigation.navigate("Home")}/>
                <MaterialIcons name="system-update" size={24} color="white" style={{marginLeft: 130}} onPress = {() => navigation.navigate("Profile")}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    Tab: {
        flexDirection: "row",
        height: 70,
        width: 360,
        backgroundColor: "#5f9ea0",
        padding: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignSelf: "center",
        position: 'absolute',
        bottom: 0, 
      },
    listItem: {
        paddingLeft: 5,
        paddingTop: 5,
        margin: 3,
        flex: 1,
        //flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
      },
      img: {
        width: 120,
        height: 120,
        borderRadius: 200,
        borderWidth: 2,
        backgroundColor: "gray"
      },
      menuButton: {
        justifyContent: "center",
          alignSelf: "center",
          borderRadius: 20,
          height: 40,
          width: 150,
          backgroundColor: "#5f9ea0",
          margin: 5,
         
      },
      menuText: {
        textAlign: "center",
          fontSize: 15,
          color: "#ffffff"
      },
})