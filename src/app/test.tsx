import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

export default function Test() {
    return (
        <View style={styles.container}>
            <Link href="/" asChild>
                <Text style={styles.title}>Ir para entrar</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#333" },
    title: { fontSize: 22, fontWeight: 'bold', color: "#fff" }
})