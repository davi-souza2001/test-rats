import AntDesign from "@expo/vector-icons/AntDesign"
import { Image, Text, View } from "react-native"

export const UserRank = () => {
    return (
        <View className="flex flex-row items-center justify-between w-full h-20 px-4 border border-gray-400 rounded-full">
            <View className="flex flex-row items-center justify-start h-20 gap-4">
                <Image
                    style={{
                        width: 50,
                        height: 50,
                    }}
                    source={require('../../../../../assets/logo.png')}
                />
                <View>
                    <Text className="text-xl font-bold text-white">
                        Alfred Owen
                    </Text>
                    <Text className="text-sm font-medium text-white opacity-80">
                        400 Calories
                    </Text>
                </View>
            </View>
            <View className="flex flex-row items-center justify-end h-20 gap-2 w-28">
                <Text className="font-medium text-white">540 Kcal</Text>
                <AntDesign name="staro" size={24} color="white" />
            </View>
        </View>
    )
}