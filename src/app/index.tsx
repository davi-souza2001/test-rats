import { GeneralDetail } from '@/components/GeneralDetail'

import CalendarIcon from '@expo/vector-icons/MaterialIcons';
import { View, Text, Image } from 'react-native'

export default function Index() {
    return (
        <View className='bg-[#040415] h-screen py-16 px-5 flex flex-col items-start justify-start'>
            <View className='flex flex-row items-center justify-between w-full'>
                <View className='flex flex-row items-center justify-start gap-4'>
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
                <View className='flex items-center justify-center w-12 h-12 border-[0.3px] border-white rounded-full'>
                    <CalendarIcon name="calendar-month" size={20} color="white" />
                </View>
            </View>
            <View className='flex items-center justify-center w-full h-40 gap-2'>
                <Text className='text-4xl font-bold tracking-[.1rem] text-white'>1884 Kcal</Text>
                <Text className='text-[#77777c]'>Total Kilocalories</Text>
            </View>
            <View className='flex flex-row items-center justify-around w-full h-12 gap-2'>
                <GeneralDetail title='7580 m' subTitle='Distance' />
                <GeneralDetail title='9832' subTitle='Steps' />
                <GeneralDetail title='1280' subTitle='Points' />
            </View>
            <View className='flex items-center justify-center w-full h-52'>
                <View className='flex items-start justify-center gap-5 p-3 bg-green-400 shadow-md h-36 w-36 rounded-3xl shadow-green-400'>
                    <Text>asd</Text>
                    <View className='w-full'>
                        <View className='flex flex-row items-center justify-start w-full gap-1'>
                            <Text className='text-xl font-bold text-white'>
                                628
                            </Text>
                            <Text className='text-lg font-semibold text-white'>
                                kcal
                            </Text>
                        </View>
                        <Text className='text-sm font-medium text-white opacity-80'>
                            Dumbbell
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}