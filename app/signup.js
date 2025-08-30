import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../theme/colors";

export default function Signup () {
    return (
        <View style={styles.wrapper}>
            {/* header group */}
            <View style={styles.header}>
                <Text style={styles.brandName}>Copreneur</Text>
                <Text style={styles.brandDesc}>Where entrepreneurs collaborate with developers</Text>
            </View>

            {/* body group */}
            <View>
                <Text>Create account</Text>
                <TouchableOpacity>
                    <Image
                    style={{
                        width: 36,
                        height: 36,
                    }}
                    source={require("../assets/images/google.png")}/>
                    <Text>Google</Text>
                </TouchableOpacity>
            </View>

            {/* bottom group */}
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
   wrapper: {
    flex: 1,
    backgroundColor: colors.brown200,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16
   }, 
   header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8
   },
   brandName: {
    fontSize: 46,
    fontWeight: "bold",
    color: colors.brown400
   },
   brandDesc: {
    fontWeight: "semibold",
    color: colors.brown400
   }
});

