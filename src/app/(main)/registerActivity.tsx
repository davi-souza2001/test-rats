import { InputText } from "@/components/InputText"
import { Text, View } from "react-native"

import { useForm } from 'react-hook-form'

export default function registerActivity() {
    const { control } = useForm();

    return (
        <View className='bg-[#040415] h-screen py-16 px-5 flex flex-col items-start justify-start'>
            <Text className="text-white">asdasd</Text>
            <View className="flex items-start justify-start w-full gap-4">
                <InputText
                    formProps={{
                        name: 'description',
                        control
                    }}
                    inputProps={{
                        placeholder: 'Description',
                    }}
                />
                <InputText
                    formProps={{
                        name: 'calories',
                        control
                    }}
                    inputProps={{
                        placeholder: 'Calories',
                    }}
                />
            </View>
        </View>
    )
}