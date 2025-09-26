import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { collection, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../settings/firebase";
import { colors } from "../../theme/colors";
import { AuthContext } from "./../../config/auth-context.config";

SplashScreen.preventAutoHideAsync();

export default function Index () {
    const { user } = useContext(AuthContext);
    const [posts,setPosts] = useState(undefined);

    const [loaded, error] = useFonts({
        "Polea-Extra": require("../../assets/fonts/Polea-Extra.otf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    // fetch posts data from the database
    useEffect(() => {
        const compiledData = [];
        onSnapshot(collection(db,"posts"),(docs) => {
            docs.forEach(doc => {
                compiledData.push({
                    id: doc.id,
                    data: doc.data()
                })
            });

            setPosts(compiledData);
        });
    },[]);

    console.log(">>>",posts)
    
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ paddingHorizontal: 8 }}>
                {/* header */}
                <View className="flex flex-row justify-between">
                    <Text style={styles.brandText}>Copreneur</Text>
                    <View className="flex flex-row gap-3">
                        <Pressable>
                            <Ionicons name="notifications" size={24} color="black" />
                        </Pressable>
                        <Link href="/(tabs)/profile">
                            <AntDesign name="user" size={24} color="black" />
                        </Link>
                    </View>
                </View>

                {/* render posts */}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    brandText: {
        fontFamily: "Polea-Extra",
        fontSize: 28,
        color: colors.brown400
    }
});