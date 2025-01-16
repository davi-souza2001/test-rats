import React, { useRef } from 'react';
import { InputText } from "@/components/InputText"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from "@expo/vector-icons/AntDesign"

import { useForm } from 'react-hook-form'

export default function registerActivity() {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();

    const caloriesRef = useRef<TextInput>(null);

    const handleSubmitActivity = (data: unknown) => {
        console.log('123')
        console.log(data)
    }

    return (
        <View className='bg-[#040415] h-screen py-16 px-5 flex flex-col items-start justify-start'>
            <View className='flex flex-row items-center justify-between w-full gap-4 my-4'>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrowleft" color="#7F7F7F" size={20} />
                </TouchableOpacity>
                <Text className='text-xl font-bold text-white'>New Activity</Text>
                <Text className='text-[#FE502E] font-medium'>Post</Text>
            </View>
            <View className='w-full h-60 rounded-xl bg-[#0c0c38] mb-4' />
            <View className="flex items-start justify-start w-full gap-4">
                <InputText
                    formProps={{
                        name: 'description',
                        control
                    }}
                    inputProps={{
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
                        placeholder: 'Calories'
                    }}
                />
            </View>
            <View className='flex items-center justify-center w-full h-32'>
                <TouchableOpacity onPress={handleSubmit(handleSubmitActivity)} className='w-full h-16 rounded-xl flex items-center justify-center bg-[#FE502E]'>
                    <Text className='text-xl font-bold text-white'>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}