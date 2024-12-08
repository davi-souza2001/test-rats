import { Link } from 'expo-router'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Index() {
    return (
        <View style={styles.container}>
            <Link href="/test" asChild>
                <TouchableOpacity>
                    <Text style={styles.title}>ir para test</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#333" },
    title: { fontSize: 22, fontWeight: 'bold', color: "#fff" }
})