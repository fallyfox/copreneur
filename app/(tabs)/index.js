import { Link } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "./../../config/auth-context.config";

export default function Index () {
    const { user } = useContext(AuthContext);
    console.log(">>>FROM HOME <<<<",user)
    
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text className="text-green-500">Welcome to default screen</Text>
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