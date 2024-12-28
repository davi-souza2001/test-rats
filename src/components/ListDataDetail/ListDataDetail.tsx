import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const DATA = [
    { id: '1', kcal: 628, label: 'Dumbbell', color: '#EF4444' },
    { id: '2', kcal: 540, label: 'Running', color: '#A856F7' },
    { id: '3', kcal: 700, label: 'Cycling', color: '#F97318' },
    { id: '4', kcal: 350, label: 'Yoga', color: '#3D83F7' },
];

const { width } = Dimensions.get('window');

const MainData = ({ kcal, label }: { kcal: number; label: string }) => (
    <View className="flex items-start justify-center gap-5 p-3 bg-green-400 shadow-md h-36 w-36 rounded-3xl shadow-green-400">
        <MaterialIcons name="sports-gymnastics" size={24} color="white" />
        <View className="w-full">
            <View className="flex flex-row items-center justify-start w-full gap-1">
                <Text className="text-xl font-bold text-white">{kcal}</Text>
                <Text className="text-lg font-medium text-white">kcal</Text>
            </View>
            <Text className="text-sm font-medium text-white opacity-80">{label}</Text>
        </View>
    </View>
);

const OthersData = ({ kcal, label, color }: { kcal: number; label: string, color: string }) => (
    <View className="flex items-start justify-center gap-5 p-3 shadow-md h-36 w-36 rounded-3xl">
        <View style={{ backgroundColor: color }} className="w-full h-1.5 rounded-full" />
        <MaterialIcons name="sports-gymnastics" size={24} color={color} />
        <View className="w-full">
            <View className="flex flex-row items-center justify-start w-full gap-1">
                <Text className="text-xl font-bold text-white">{kcal}</Text>
                <Text className="text-lg font-medium text-white">kcal</Text>
            </View>
            <Text className="text-sm font-medium text-white opacity-80">{label}</Text>
        </View>
    </View>
);


export const ListDataDetail = () => {
    return (
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item, index }) => (
                <View className='flex items-center justify-center mr-4 h-52'>
                    {index === 0 ? (
                        <MainData kcal={item.kcal} label={item.label} />
                    ) : (
                        <OthersData kcal={item.kcal} label={item.label} color={item.color} />
                    )}
                </View>
            )}
            snapToInterval={width * 0.4 + 16}
            decelerationRate="fast"
            bounces={false}
        />
    );
};
