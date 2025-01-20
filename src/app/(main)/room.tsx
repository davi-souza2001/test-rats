import { InputText } from "@/components/InputText";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import { View, Text, TouchableOpacity, TextInput } from 'react-native'

export default function Room() {
    const { control } = useForm();
    const roomRef = useRef<TextInput>(null);

    return (
        <View className='bg-[#040415] h-screen py-16 px-5 flex flex-col items-center justify-center gap-32'>
            <View className='flex items-center justify-center w-full gap-5'>
                <Text className='text-3xl font-bold text-white'>
                    Join the room
                </Text>
                <Text className='text-[#7F7F7F] text-xl font-medium text-center'>
                    Let&apos;s start the week with a challenge with your best friends
                </Text>
            </View>
            <View className='flex items-center justify-center w-full gap-10'>
                <InputText
                    formProps={{
                        name: 'description',
                        control
                    }}
                    inputProps={{
                        placeholder: 'Description',
                        onSubmitEditing: () => roomRef.current?.focus(),
                        returnKeyType: 'next',
                        className: "w-full h-20 p-2 text-white border border-[#0c0c38] text-xl rounded-lg placeholder:text-slate-400"
                    }}
                />
                <TouchableOpacity className='bg-[#FD4E2C] h-20 w-full rounded-2xl flex items-center justify-center'>
                    <Text className='text-xl font-bold text-white'>Login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-[#0c0c38] h-20 w-full rounded-2xl flex items-center justify-center'>
                    <Text className='text-xl font-bold text-white'>Create Room</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
