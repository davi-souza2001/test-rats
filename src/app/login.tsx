import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native'

const styles = StyleSheet.create({
    tinyLogo: {
        width: 150,
        height: 150,
    },
});

export default function Login() {
    return (
        <View className='bg-[#040415] h-screen py-16 px-5 flex flex-col items-center justify-center gap-32'>
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/logo.png')}
                />
            </View>
            <View className='flex items-center justify-center w-full'>
                <Text className='text-3xl font-bold text-white'>Welcome to Test Rats</Text>
                <Text className='text-[#7F7F7F] text-xl font-medium'>We need to work out safely</Text>
            </View>
            <View className='flex items-center justify-center w-full'>
                <TouchableOpacity className='bg-[#FD4E2C] h-20 w-full rounded-2xl flex items-center justify-center'>
                    <Text className='text-xl font-bold text-white'>Login with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}