import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index () {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>My profile</Text>
                <Text>Welcome to copreneur</Text>
                <Link 
                href="/signup"
                style={{
                    fontWeight: "bold",
                    color: "brown"
                }}>Create a new account</Link>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    p: {
        fontSize: 16, //unit is point
        fontWeight: "bold"
    }
})