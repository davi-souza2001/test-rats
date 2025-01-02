import { View } from "react-native"
import { UserRank } from "./components/UserRank";

export const ListFriends = () => {
    return (
        <View className='flex items-start justify-start w-full gap-4'>
            <UserRank />
            <UserRank />
            <UserRank />
        </View>
    )
}