import React from "react";
import "../../styles/global.css"
import { MaterialIcons } from "@expo/vector-icons"

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
        </Tabs>
    )
}