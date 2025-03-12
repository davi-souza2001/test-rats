import { Link } from "expo-router";
import React from "react";
import { Text, View, Pressable } from "react-native"

export const RoomUserRank = () => {
    return (
        <Link href="/roomActivity" asChild>
            <Pressable>
                <View className="flex flex-row justify-between items-center px-4 mb-3 w-full h-20 rounded-xl border border-gray-400">
                    <View className="flex flex-row gap-4 justify-start items-center h-20">
                        <View className="h-[50px] w-[50px] bg-gray-400 rounded-full" />
                        <View>
                            <Text className="text-xl font-bold text-white">
                                Chest
                            </Text>
                            <Text className="text-sm font-medium text-white opacity-80">
                                Davi Souza
                            </Text>
                        </View>
                    </View>
                    <View className="flex flex-row justify-end items-end py-4 w-28 h-20">
                        <Text className="font-thin text-white">7:40 pm</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    )
}