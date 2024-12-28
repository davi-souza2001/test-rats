import { Image, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { UserRank } from "./components/UserRank";

export const ListFriends = () => {
    return (
        <View className='flex items-start justify-start w-full gap-4'>
            <UserRank/>
            <UserRank/>
            <UserRank/>
        </View>
    )
}