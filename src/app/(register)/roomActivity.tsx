import React, { useRef } from 'react';
import { InputText } from "@/components/InputText"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from "@expo/vector-icons/AntDesign"

import { useForm } from 'react-hook-form'

export default function RoomActivity() {
    const { control } = useForm();
    const navigation = useNavigation();

    const caloriesRef = useRef<TextInput>(null);

   

    return (
        <View className='bg-[#040415] h-screen py-16 px-5 flex flex-col items-start justify-start'>
            <View className='flex flex-row gap-4 justify-between items-center my-4 w-full'>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrowleft" color="#7F7F7F" size={20} />
                </TouchableOpacity>
                <Text className='text-xl font-bold text-white'>New Activity</Text>
            </View>
            <View className='w-full h-60 rounded-xl bg-[#0c0c38] mb-4' />
            <View className="flex gap-4 justify-start items-start w-full">
                <InputText
                    formProps={{
                        name: 'description',
                        control
                    }}
                    inputProps={{
                        readOnly: true,
                        placeholder: 'Description',
                        onSubmitEditing: () => caloriesRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                />
                <InputText
                    ref={caloriesRef}
                    formProps={{
                        name: 'calories',
                        control
                    }}
                    inputProps={{
                        readOnly: true,
                        placeholder: 'Calories'
                    }}
                />
            </View>
           
        </View>
    )
}