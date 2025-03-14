import React from "react";
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    tinyLogo: {
        width: 150,
        height: 150,
    },
});

export default function Start() {
    return (
        <View className='bg-[#040415] h-screen py-16 px-5 flex flex-col items-center justify-center gap-32'>
            <View>
                <Image
                    style={styles.tinyLogo}
                    // eslint-disable-next-line @typescript-eslint/no-require-imports
                    source={require('../../../assets/logo.png')}
                />
            </View>
            <View className='flex items-center justify-center w-full'>
                <Text className='text-3xl font-bold text-white'>Welcome to Test Rats</Text>
                <Text className='text-[#7F7F7F] text-xl font-medium'>We need to work out safely</Text>
            </View>
            <View className='flex items-center justify-center w-full'>
                <Link href="/login" asChild>
                    <TouchableOpacity className='bg-[#FD4E2C] h-20 w-full rounded-2xl flex items-center justify-center'>
                        <Text className='text-xl font-bold text-white'>Let&apos;s Walk</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}