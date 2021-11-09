import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

const image = {uri: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};

const LandingPage = ({navigation}) => {
    return(
        <View style={styles.container}>
           <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("LoginPage")}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("RegisterPage")}>
                    <Text  style={styles.btnText}>Add Admin </Text>
                    </TouchableOpacity>
                </View>

           </ImageBackground>
        </View>
    );
}
export default LandingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnText: {
        textAlign: "center",
        fontSize: 35,
        color: "#ffffff",
    },
    buttons: {
        backgroundColor: "#5f9ea0",
        borderRadius: 20,
        padding: 10,
        height: 120,
        width: 300,
        paddingTop: 25,
        margin: 25,
        alignSelf: "center",
    },
    buttonContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 160,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    HeadText:{
        marginTop: -60,
        justifyContent: "center",
        textAlign: "center",
        alignSelf: "center",
        height: 80,
},
});