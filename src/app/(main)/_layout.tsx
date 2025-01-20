import React from "react";
import "../../styles/global.css"
import { MaterialIcons } from "@expo/vector-icons"
import AntDesign from '@expo/vector-icons/AntDesign';

import { Tabs } from "expo-router"

// , tabBarShowLabel: false
export default function Layout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarLabelPosition: "beside-icon",
            tabBarInactiveTintColor: "red",
            tabBarActiveTintColor: "blue",
        }} >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: 'Teste',
                    tabBarIcon: ({ color }) => <MaterialIcons name="home" color={color} size={20} />
                }} />
            <Tabs.Screen
                name="room"
                options={{
                    tabBarLabel: 'Room',
                    tabBarIcon: ({ color }) =>  <AntDesign name="pushpin" size={20} color={color} />
                }} />
        </Tabs>
    )
}