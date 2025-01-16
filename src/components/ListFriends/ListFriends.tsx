import React from "react";
import { View, ScrollView } from "react-native"
import { UserRank } from "./components/UserRank";

export const ListFriends = () => {
    const mock_list = [1, 2, 3, 4, 5, 6]

    return (
        <View >
            <ScrollView className="h-64">
                {mock_list.map((item, index) => (
                    <UserRank key={index} />
                ))}
            </ScrollView>
        </View>
    )
}