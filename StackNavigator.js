import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PickUpScreen from "./screens/PickUpScreen";
import CartScreen from "./screens/CartScreen";
import LogInScreen from "./screens/LogInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";
   
function StackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PickUp" component={PickUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false}} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false}} />
                <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;
