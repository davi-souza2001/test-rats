import { InputText } from "@/components/InputText";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 100,
    },
});

export default function Profile() {
    const { control, handleSubmit } = useForm();

    const caloriesRef = useRef<TextInput>(null);

    const handleSubmitActivity = (data: unknown) => {
        console.log('123')
        console.log(data)
    }

    return (
        <View className='bg-[#040415] h-screen py-16 px-5 flex flex-col items-start justify-start'>
            <View className='flex flex-col gap-10 justify-center items-center w-full h-52'>
                <Image
                    style={styles.tinyLogo}
                    // eslint-disable-next-line @typescript-eslint/no-require-imports
                    source={require('../../../assets/logo.png')}
                />
                <Text className='text-2xl font-bold text-white'>Your Profile</Text>
            </View>
            <View className="w-full h-0.5 bg-[#171726] my-5" />
            <View className="flex gap-4 justify-start items-start w-full">
                <View className="flex flex-col gap-2 w-full">
                    <Text className='font-medium text-[#707072]'>Name</Text>
                    <InputText
                        formProps={{
                            name: 'description',
                            control
                        }}
                        inputProps={{
                            onSubmitEditing: () => caloriesRef.current?.focus(),
                            returnKeyType: 'next',
                            }}
                    />
                </View>
                <View className="flex flex-col gap-2 w-full">
                    <Text className='font-medium text-[#707072]'>Date of birth</Text>
                    <InputText
                        ref={caloriesRef}
                        formProps={{
                            name: 'calories',
                            control
                        }}
                    />
                </View>
            </View>
            <View className='flex justify-center items-center w-full h-32'>
                <TouchableOpacity onPress={handleSubmit(handleSubmitActivity)} className='w-full h-16 rounded-xl flex items-center justify-center bg-[#FE502E]'>
                    <Text className='text-xl font-bold text-white'>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
