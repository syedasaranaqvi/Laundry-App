import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";

const LogInScreen = () => {
    const [email, setEmail] = useState("");
    const [loading, setloading] = useState(false);
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        setloading(true);
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            navigation.navigate("Home");
          }
          setloading(false);
        });
      
        return unsubscribe;
      }, []);
      

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("User Credential", userCredential);
            const user = userCredential.user;
            console.log("User Details", user)
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center", padding: 10 }}>
                <KeyboardAvoidingView>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                        <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>Sign In</Text>

                        <Text style={{ fontSize: 20, marginTop: 8, fontWeight: "600" }}>Sign In to your account</Text>
                    </View>

                    <View style={{ marginTop: 50 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                            <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} placeholderTextColor="black" style={{ fontSize: email ? 18 : 18, borderBottomWidth: 1, borderBottomColor: "gray", width: 300, marginVertical: 10, marginLeft: 15 }} />
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Ionicons name="key-outline" size={24} color="black" />
                            <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder="Password" placeholderTextColor="black" style={{ fontSize: password ? 18 : 18, borderBottomWidth: 1, borderBottomColor: "gray", width: 300, marginVertical: 20, marginLeft: 15 }} />
                        </View>
                        <Pressable onPress={login} style={{ width: 150, backgroundColor: "#318CE7", borderRadius: 20, marginTop: 50, marginLeft: "auto", marginRight: "auto" }}>
                            <Text style={{ fontSize: 25, textAlign: "center", color: "white" }}>LogIn</Text>
                        </Pressable>

                        <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 20 }}>
                            <Text style={{ textAlign: "center", fontSize: 17, color: "gray", fontWeight: "500" }}>Don't Have An Account? Sign Up</Text>
                        </Pressable>

                    </View>
                </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default LogInScreen

const styles = StyleSheet.create({})