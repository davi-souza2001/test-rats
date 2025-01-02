import { Link } from 'expo-router';
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
                    source={require('../../../assets/logo.png')}
                />
            </View>
            <View className='flex items-center justify-center w-full gap-5'>
                <Text className='text-3xl font-bold text-white'>
                    Join the Challenge
                </Text>
                <Text className='text-[#7F7F7F] text-xl font-medium text-center'>
                    Let's start the week with a challenge with your best friends
                </Text>
            </View>
            <View className='flex items-center justify-center w-full'>
                <Link href="/" asChild>
                    <TouchableOpacity className='bg-[#FD4E2C] h-20 w-full rounded-2xl flex items-center justify-center'>
                        <Text className='text-xl font-bold text-white'>Login with Google</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}