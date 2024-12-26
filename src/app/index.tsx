import { View, Text, Image } from 'react-native'

export default function Index() {
    return (
        <View className='bg-[#040415] h-screen py-10 px-5 flex flex-col items-start justify-start'>
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
            <View className='flex items-center justify-center w-full h-40 gap-2'>
                <Text className='text-4xl font-bold tracking-[.1rem] text-white'>1884 Kcal</Text>
                <Text className='text-[#77777c]'>Total Kilocalories</Text>
            </View>
            <View className='flex flex-row items-center justify-around w-full h-20 gap-2'>
                <View className='flex items-center justify-center w-full gap-2'>
                    <Text className='text-2xl font-bold tracking-[.1rem] text-white'>7580 m</Text>
                    <Text className='text-sm text-[#77777c]'>Distance</Text>
                </View>
            </View>
        </View>
    )
}