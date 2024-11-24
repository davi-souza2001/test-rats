import { View, Text, StyleSheet } from 'react-native'

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#333" },
    title: { fontSize: 22, fontWeight: 'bold', color: "#fff" }
})