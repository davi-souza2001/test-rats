import React from "react";
import { View, TextInput, TextInputProps } from "react-native"
import { Controller, UseControllerProps } from 'react-hook-form'
import { forwardRef } from "react"

type InputTextProps = {
    formProps: UseControllerProps
    inputProps: TextInputProps
}

const InputText = forwardRef<TextInput, InputTextProps>(({ formProps, inputProps }, ref) => {
    return (
        <Controller
            render={({ field }) => (
                <View className="w-full">
                    <TextInput
                        ref={ref}
                        value={field.value}
                        onChangeText={field.onChange}
                        className="w-full h-12 p-2 text-white border border-[#0c0c38] rounded-lg placeholder:text-slate-400"
                        {...inputProps}
                    />
                </View>
            )}
            {...formProps}
        />
    )
});
InputText.displayName = "InputText";
export { InputText }