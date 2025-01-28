import { ScrollView, Text, View } from "react-native"
import React from "react";
import { RoomUserRank } from "./RoomUserRank";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome5';

export const RoomList = () => {
    const mock_list = [1, 2]

    return (
        <View className='bg-[#040415] h-screen py-20 px-5 flex flex-col items-center justify-start gap-5'>
            <View className='flex flex-row items-center justify-between w-full gap-5'>
                <Text className='text-2xl font-bold text-white'>
                    Test Room
                </Text>
                <View className='flex items-center justify-center w-10 h-10 border-[0.5px] bg-[#FE502E] rounded-full'>
                    <Link href="/registerActivity">
                        <MaterialIcons name="add" color="white" size={20} />
                    </Link>
                </View>
            </View>
            <View className='flex flex-row items-center justify-around w-full h-12 gap-2 px-3'>
                <View className='flex flex-row items-center justify-center w-32 gap-2'>
                    <View className="w-12 h-12 bg-gray-400 rounded-full" />
                    <View>
                        <Text className='text-xl font-bold tracking-[.1rem] text-white'>Davi</Text>
                        <Text className='text-sm text-[#77777c] ml-0.5'>Top 1</Text>
                    </View>
                </View>
                <View className='flex flex-row items-center justify-center w-32 gap-2'>
                    <View className="w-12 h-12 bg-gray-400 rounded-full" />
                    <View>
                        <Text className='text-xl font-bold tracking-[.1rem] text-white'>Davi</Text>
                        <Text className='text-sm text-[#77777c] ml-0.5'>You</Text>
                    </View>
                </View>
                <View className='flex items-center justify-center w-32'>
                    <Text className='text-lg font-bold tracking-[.1rem] text-white'>Ranking</Text>
                    <FontAwesome name="medal" size={20} color="white" />
                </View>
            </View>

            <ScrollView className="h-64">
                {mock_list.map((item) => (
                    <View key={item}>
                        <View className="w-full h-10">
                            <Text className="text-lg font-thin text-white">Today</Text>
                        </View>
                        <RoomUserRank />
                        <RoomUserRank />
                        <RoomUserRank />
                        <RoomUserRank />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}