import React from "react";
import { CreateRoom, RoomList } from "@/components/Room";
import { View } from "react-native";

export default function Room() {
    const room = false

    return (
        <View>
            {room  ? <CreateRoom /> : <RoomList />}
        </View>
    );
}
