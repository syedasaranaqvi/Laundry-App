import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, Alert} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { db } from "../firebase"; 
import { collection, doc, setDoc } from "firebase/firestore";



const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const navigation = useNavigation();
    const register = () => {
        if (email === "" || password === "" || phone === ""){
            Alert.alert('Invalid Details', 'Please fill the details', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("User Credential", userCredential);
            const user = userCredential.user;
            const myUserUid = user.uid;
          
            setDoc(doc(db, "users", myUserUid), {
              email: user.email,
              phone: phone,
            });
          });          
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center", padding: 10 }}>
            <KeyboardAvoidingView>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                    <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>Sign Up</Text>

                    <Text style={{ fontSize: 20, marginTop: 8, fontWeight: "600" }}>Create A New Account</Text>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                        <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} placeholderTextColor="black" style={{ fontSize: email ? 18 : 18, borderBottomWidth: 1, borderBottomColor: "gray", width: 300, marginVertical: 10, marginLeft: 15 }} />
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="key-outline" size={24} color="black" />
                        <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder="Password" placeholderTextColor="black" style={{ fontSize: password ? 18 : 18, borderBottomWidth: 1, borderBottomColor: "gray", width: 300, marginVertical: 20, marginLeft: 15 }} />
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="phone-outline" size={24} color="black" />
                        <TextInput value={phone} onChangeText={(text) => setPhone(text)} placeholder="Phone Number" placeholderTextColor="black" style={{ fontSize: password ? 18 : 18, borderBottomWidth: 1, borderBottomColor: "gray", width: 300, marginVertical: 20, marginLeft: 15 }} />
                    </View>
 

                    <Pressable onPress={register} style={{ width: 150, backgroundColor: "#318CE7", borderRadius: 20, marginTop: 50, marginLeft: "auto", marginRight: "auto" }}>
                        <Text style={{fontSize:25, textAlign:"center", color:"white"}}>Register</Text>
                    </Pressable>

                    <Pressable  onPress={() => navigation.goBack()} style={{marginTop: 20}}>
                        <Text style={{textAlign:"center", fontSize:17, color:"gray", fontWeight:"500"}}>Already Have An Account? LogIn</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})