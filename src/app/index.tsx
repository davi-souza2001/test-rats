import { View, Text, Image } from 'react-native'

export default function Index() {
    return (
        <View className='bg-[#040415] h-screen py-16 px-5 flex flex-col items-start justify-start gap-32'>
            <View className='flex flex-row items-center justify-between w-full'>
                <View className='flex flex-row items-center justify-start gap-2'>
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                        }}
                        source={require('../../assets/logo.png')}
                    />
                    <View>
                        <Text className='text-[#7F7F7F] font-medium'>Hello Linh!</Text>
                        <Text className='text-xl font-bold text-white'>Welcome to Test Rats</Text>
                    </View>
                </View>
                <Text className='text-white'>
                    asdas
                </Text>
            </View>
        </View>
    )
}