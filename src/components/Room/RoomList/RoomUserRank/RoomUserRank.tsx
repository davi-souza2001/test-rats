import React from "react";
import { Text, View } from "react-native"

export const RoomUserRank = () => {
    return (
        <View className="flex flex-row items-center justify-between w-full h-20 px-4 mb-3 border border-gray-400 rounded-xl">
            <View className="flex flex-row items-center justify-start h-20 gap-4">
                <View className="h-[50px] w-[50px] bg-gray-400 rounded-full"/>
                <View>
                    <Text className="text-xl font-bold text-white">
                        Chest
                    </Text>
                    <Text className="text-sm font-medium text-white opacity-80">
                        Davi Souza
                    </Text>
                </View>
            </View>
            <View className="flex flex-row items-end justify-end h-20 py-4 w-28">
                <Text className="font-thin text-white">7:40 pm</Text>
            </View>
        </View>
    )
}