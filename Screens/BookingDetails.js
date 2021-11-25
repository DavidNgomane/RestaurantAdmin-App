import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import constant from 'expo-constants';
import moment from 'moment';
import { auth, db } from '../data/firebase'
import { useState } from 'react/cjs/react.development';

const image1 = {uri: "https://images.unsplash.com/photo-1599458448510-59aecaea4752?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const BookingDetails = ({route, navigation}) => {

  const [disabled, setDisabled] = useState(false);
  const [disabled1, setDisabled1] = useState(false);

    const {key} =route.params;

    const updateCancel = () => {
        console.log(key);
          return db
            .collection("Bookings")
            .doc(key)
            .update({
            status: "cancelled"
            })
            .then((snapShot) => {
              setDisabled1(!disabled1)
              //navigation.navigate("AdminHome");
              alert("Booking has been cancelled");
            })
            .catch((error) => {
              const errorMessage = error.message;
              alert("Could not cancel booking")
            });
        }
      
        const updateApprove = () => {
            
            return db
              .collection("Bookings")
              .doc(key)
              .update({
              status: "approved"
              })
              .then((snapShot) => {
                setDisabled(!disabled)
                //navigation.navigate("AdminHome");
                alert("Booking has been approved");
              })
              .catch((error) => {
                const errorMessage = error.message;
                alert("Could not approve booking")
              });
          }

  return (
    <View  style={styles.container}>
       <View style={styles.Top}>
        <ImageBackground source = {image1} resizeMode="cover" style={styles.image1}>
            <View  style={styles.HeadText}>
              <Text style={styles.TextRestaurant}>
                Booking
              </Text>
            </View>
        </ImageBackground>
      </View>

        <View style={styles.preview}>
        {/*console.log(route.params.key  + "this is the key")*/}
         <View style={{margin: 10}}>
                <Text>
                <Text style={{fontWeight: 'bold'}}>
                   Restaurant:
                </Text> {route.params.restaurant}
                </Text>

                <Text>
                <Text style={{fontWeight: 'bold'}}>
                   Guests:
                </Text> {route.params.numberOfPeople}
                </Text>

                <Text>
                <Text style={{fontWeight: 'bold'}}>
                   Date:
                </Text> {moment(route.params.date).format("DD/MM/YYYY")}
                </Text>

                < Text>
                <Text style={{fontWeight: 'bold'}}>
                   Time:
                </Text> {moment(route.params.time).format("hh:mm a")}
                </Text>
                <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 20}}>
                <TouchableOpacity disabled={disabled} onPress={updateApprove} style={{backgroundColor: "#5f9ea0", 
                    marginHorizontal: 15, borderRadius: 20, width: 50, height: 25, width: 80, marginTop: 10}}>
                  <Text style={{textAlign: "center", color: "#fff"}}> {disabled? 'Disabled': 'Approve'} </Text>
                </TouchableOpacity>

                <TouchableOpacity disabled={disabled1} onPress={updateCancel} style={{backgroundColor: "#ff0000", 
                    marginHorizontal: 15, borderRadius: 20, width: 50, height: 25, width: 80, marginTop: 10}}>
                  <Text style={{textAlign: "center", color: "#fff"}}> {disabled1? 'Disabled': 'Cancel'} </Text>
                </TouchableOpacity>
                
                </View>
              </View>
        </View>

        <View style={styles.Button}>
            <TouchableOpacity  onPress = {() => navigation.navigate("Home")} style={styles.submitButton}>
              <Text style={styles.submitText}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  Tab: {
    flexDirection: "row",
    height: 70,
        width: 360,
        marginTop: 10,
        backgroundColor: "#2e8b57",
        padding: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignSelf: "center",
        position: 'absolute',
        bottom: 0, 
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
    flexDirection: "row",
    marginVertical: -20,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    height: 80,
    marginHorizontal: 30,
  },
  TextRestaurant:{
    fontSize: 40,
    color: "white",
    height: 120,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
  },
  preview: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 250,
    width: 300,
    backgroundColor: "white",
    padding: 12,
    marginTop: 40,
    paddingBottom: 25,
    borderWidth: 1
  },
  submitButton: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 70,
    width: 300,
    backgroundColor: "#5f9ea0",
},
submitText:{
  textAlign: "center",
  fontSize: 25,
  color: "#ffffff"
},
Button:{
  margin: 45
}
});