import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal, Pressable, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import constant from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import { auth, db } from '../data/firebase'

const UpdatePage = ({navigation}) => {

const [image, setImage] = useState('');
const [description, setDescription] = useState('');


const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const update = () => {
    try {
        const uid = auth?.currentUser?.uid;
        return db
          .collection("admin")
          .doc(uid)
          .update({
            uid: uid,
            image: image,
            description: description
          })
          .then((snapShot) => navigation.navigate("Profile"))
          .catch((error) => {
            const errorMessage = error.message;
            alert("Couldn't update resturant Details");
          });
        // ...
      } catch (error) {
        const errorMessage = error.message;
        alert("Failed to update restaurant");
      }
  }


return (
    <View  style={styles.container}>
      <View style={{marginLeft: 30, marginTop: 40}}>
        <FontAwesome name="window-close" size={24} color="#5f9ea0" onPress={() => navigation.navigate("Profile")}/>
    </View>

    <View style={{justifyContent: "center", alignItems: "center"}}>
        <TouchableOpacity  onPress={pickImage}>
        <Image style={styles.image} source={{uri: image}} value={image}/>
              
        <FontAwesome name="camera" size={24} color="black" style={{marginLeft: 80, marginTop: -25}}/>
        </TouchableOpacity> 
    </View>

   
          <View style={styles.TextField}>
            <View style={{flex: 1, flexDirection: "row", marginHorizontal: 3}}>
              <Text style={{flex: 1, flexDirection: "row",color: "#5f9ea0", 
              marginHorizontal: 10,fontWeight: "bold"}}>
                Description:</Text>
            </View>
              <TextInput 
                style={styles.input}
                onChangeText={description => setDescription(description)}
                value={description}
                placeholder="Enter Restaurant Description"
              />
          </View>

          <View style={{paddingTop: 55}}>
            <TouchableOpacity style={styles.touch1} onPress={update}>
                <Text style={styles.text2}>Upload Details</Text>
            </TouchableOpacity>  
            </View>

    </View>
    )
}
export default UpdatePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 200,
        borderWidth: 2,
        backgroundColor: "gray"
      },
    TextField: {
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20,
        height: 95,
        width: 250,
        backgroundColor: "#ffffff",
        padding: 10,
        paddingTop: 3,
        marginTop: 25
      },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
      },
    touch1: {
        backgroundColor: '#5f9ea0',
        width: 220,
        borderRadius: 20,
        padding: 15,
        marginLeft: 70,
      },
    text2: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
      },
})