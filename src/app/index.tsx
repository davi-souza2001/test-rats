import { Link } from 'expo-router'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export default function Index() {
    return (
        <View className='bg-[#040415] h-screen py-16 px-5 flex flex-col items-center justify-center gap-32'>
            <View>
                <Image 
                    source={{uri: '../../../assets/logo.svg'}} 
                    style={{ width: 100, height: 100 }} 
                    className='bg-red-500'
                />
            </View>
            <View className='flex items-center justify-center w-full'>
                <Text className='text-3xl font-bold text-white'>Welcome to Test Rats</Text>
                <Text className='text-[#7F7F7F] text-xl font-medium'>We need to work out safely</Text>
            </View>
            <View className='flex items-center justify-center w-full'>
                <Link href="/test" asChild>
                    <TouchableOpacity className='bg-[#FD4E2C] h-20 w-full rounded-2xl flex items-center justify-center'>
                        <Text className='text-xl font-bold text-white'>Let's Walk</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}