import React, {useState, useEffect } from "react";
import { View, Text, StyleSheet,TextInput, ImageBackground, TouchableOpacity, Dimensions} from "react-native";
import { auth, db } from '../data/firebase'

const image = {uri: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}

const RegisterPage = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          navigation.navigate("UpdatePage");
          const user = userCredential.user;
          return db.collection('admin').doc(user.uid).set({
              uid: user.uid,
              name: name,
              email:user.email,
          })
         
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage)
        });
             }
             

    return(
        <View style={styles. container}>
            <View style={styles.Top}>
              <ImageBackground source = {image} resizeMode="cover" style={styles.image1}>
                <View  style={styles.HeadText}>
                  <Text style={styles.TextRestaurant}>
                    Register
                  </Text>
                </View>
              </ImageBackground>
            </View>

            <View style={{backgroundColor: "#f5f5f5", height: "80%", borderTopLeftRadius: 30, marginTop: -50}}>
                <View style={styles.TextField}>
                    <View style={{flex: 1, flexDirection: "row", marginHorizontal: 3}}>
                        <Text style={{flex: 1, flexDirection: "row", marginHorizontal: 10,fontWeight: "bold"}}>Name:</Text>
                    </View>
                    <TextInput 
                        style={styles.input}
                        onChangeText={name => setName(name)}
                        value={name}
                        placeholder="Enter your name"
                    />
                </View>

                <View style={styles.TextField}>
                    <View style={{flex: 1, flexDirection: "row", marginHorizontal: 3}}>
                        <Text style={{flex: 1, flexDirection: "row", marginHorizontal: 10,fontWeight: "bold"}}>Email:</Text>
                    </View>
                    <TextInput 
                        style={styles.input}
                        onChangeText={email => setEmail(email)}
                        value={email}
                        placeholder="Enter your email"
                    />
                </View>

                <View style={styles.TextField}>
                    <View style={{flex: 1, flexDirection: "row", marginHorizontal: 3}}>
                        <Text style={{flex: 1, flexDirection: "row", marginHorizontal: 10,fontWeight: "bold"}}>Password:</Text>
                    </View>
                    <TextInput 
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        value={password}
                        placeholder="Enter your name"
                    />
                </View>
        
                <View style={styles.Button}>
                    <TouchableOpacity onPress={register} style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    );
}
export default RegisterPage;

const styles = StyleSheet.create({
container: {
    flex: 1,
    height: "100%",
    width: "100%"
    },
image: {
    flex: 1, 
    justifyContent: "center", 
},
HeadText: {
    marginTop: 20,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    height: 80,
},
TextRestaurant:{
    fontSize: 40,
    color: "white",
    height: 150,
    fontWeight: "bold"
  },
  Top:{
    height: "30%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  image1: {
    flex: 1, 
    justifyContent: "center", 
    height: "100%",
    flexDirection: "row"
  },
  loginForm: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    height: "100%",
    borderTopLeftRadius: 20,
    marginTop: -40,
    marginVertical: -10
  },
  TextField: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: 95,
    width: 300,
    backgroundColor: "#ffffff",
    padding: 10,
    paddingTop: 3,
    marginTop: 10
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
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
    color: "#ffffff",
    fontWeight: "bold"
  },
  Button:{
    margin: 15
  },
  FooterText: {
    justifyContent: "center",
    alignSelf: "center",
  }
  
});