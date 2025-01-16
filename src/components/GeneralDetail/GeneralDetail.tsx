import React from "react";
import { Text, View } from "react-native"

type GeneralDetailProps = {
    title: string
    subTitle: string
}

export const GeneralDetail = ({ title, subTitle }: GeneralDetailProps) => {
    return (
        <View className='flex items-center justify-center w-32 gap-2'>
            <Text className='text-2xl font-bold tracking-[.1rem] text-white'>{title}</Text>
            <Text className='text-sm text-[#77777c]'>{subTitle}</Text>
        </View>
    )
}