import { Link } from "expo-router";
import { useFormik } from "formik";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as yup from "yup";
import { colors } from "../theme/colors";

const validationRules = yup.object({
    email: yup.string().email().required(),
    password: yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/\d/, "Password must contain at least one number.")
    .matches(/[!@#$%^&*]/, "Password must contain at least one special character.")
    .required("Password is required"),
    passwordConfirmation: yup.string().required().oneOf([yup.ref("password"),null])
});

export default function Signup() {

    const { handleBlur, handleChange, handleSubmit, touched, errors, values} = useFormik({
        initialValues: { email:"", password:"", passwordConfirmation:"" },
        onSubmit: () => {
            console.log("form was submitted")
        },
        validationSchema: validationRules
    });

    console.log(typeof(JSON.stringify(errors)),"<<<<")

    return (
        <KeyboardAvoidingView
            style={styles.wrapper}
            behavior="padding"
            keyboardVerticalOffset={Platform.select({
                ios: 0,
                android: -StatusBar.currentHeight,
            })}>

            <ScrollView
                contentContainerStyle={styles.ScrollViewContainer}
                showsVerticalScrollIndicator={false}>

                {/* header group */}
                <View style={styles.header}>
                    <Text style={styles.brandName}>Copreneur</Text>
                    <Text style={styles.brandDesc}>Where entrepreneurs collaborate with developers</Text>
                </View>

                {/* body group  */}
                <View style={styles.body}>
                    <Text style={styles.bodyText}>Create account</Text>

                    {/* create account with google */}
                    <TouchableOpacity style={styles.signupBtn}>
                        <Image
                            style={{
                                width: 36,
                                height: 36,
                            }}
                            source={require("../assets/images/google.png")}></Image>
                        <Text style={styles.signInText}>Google</Text>
                    </TouchableOpacity>

                    {/* OR */}
                    <View style={styles.orSec}>
                        <View style={styles.line}></View>
                        <Text style={styles.orText}>OR</Text>
                        <View style={styles.line}></View>
                    </View>

                    {/* create account with email and password */}
                    <View style={styles.form}>
                        <View>
                            <TextInput
                            keyboardType="email-address"
                            style={styles.input}
                            placeholder="eg. john@example.com"
                            value={values.email}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")} 
                            />
                            {errors.email && touched.email && 
                            <Text style={styles.errormsg}>{errors.email}</Text>}
                        </View>

                        <View>
                            <TextInput
                            secureTextEntry={true}
                            keyboardType="default"
                            style={styles.input}
                            placeholder="create password"
                            value={values.password}
                            onChangeText={handleChange("password")} 
                            onBlur={handleBlur("password")}
                            />
                            {errors.password && touched.password && 
                            <Text style={styles.errormsg}>{errors.password}</Text>}
                        </View>

                        {!errors.password && touched.password &&
                        <View>
                            <TextInput
                            secureTextEntry={true}
                            keyboardType="default"
                            style={styles.input}
                            placeholder="confirm password"
                            value={values.passwordConfirmation}
                            onChangeText={handleChange("passwordConfirmation")}
                            onBlur={handleBlur("passwordConfirmation")} />
                            {errors.passwordConfirmation && touched.passwordConfirmation && 
                            <Text style={styles.errormsg}>{errors.passwordConfirmation}</Text>}
                        </View>}

                        {!errors.passwordConfirmation && !errors.email && touched.passwordConfirmation &&
                        <TouchableOpacity onPress={handleSubmit} style={styles.signupBtn}>
                            <Text style={styles.signInText}>Create Account</Text>
                        </TouchableOpacity>}
                    </View>

                    {/* already have an account? */}
                    <View style={styles.already}>
                        <Text style={styles.alreadyText}>Already have an account?</Text>
                        <Link href="/signin" style={styles.alreadyLink}>Go to sign in</Link>
                    </View>
                </View>

                {/* bottom group */}
                <View style={styles.footer}>
                    <Link href="/about" style={styles.footerLink}>About Copreneur</Link>
                    <Link href="/about" style={styles.footerLink}>Home</Link>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.brown200,
        paddingTop: StatusBar.currentHeight,
    },
    ScrollViewContainer: {
        flexGrow: 1,
        justifyContent: "space-between",
        marginBottom: 40,
    },
    header: {
        display: "flex",
        flexDirection: "column", // the direction we want the item to be arranged
        alignItems: "center",
        gap: 8,
    },
    brandName: {
        fontSize: 46,
        fontWeight: "bold",
        color: colors.brown400
    },
    brandDesc: {
        fontWeight: "bold",
        color: colors.brown400,
        textAlign: "center",
    },
    body: {
        display: "flex",
        gap: 18,
        paddingHorizontal: 20,
    },
    bodyText: {
        color: colors.brown400,
        fontSize: 18
    },
    already: {
        display: "flex",
        flexDirection: "row",
        gap: 4,
    },
    alreadyText: {
        color: colors.brown400,
    },
    alreadyLink: {
        color: colors.brown300,
        fontWeight: "bold",
    },
    signupBtn: {
        height: 56,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        backgroundColor: colors.brown400,
        borderRadius: 4,

    },
    signInText: {
        color: colors.brown100,
        fontSize: 22,
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    footerLink: {
        color: colors.brown400,
        fontSize: 12,
    },
    orSec: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    orText: {
        fontSize: 16,
        color: colors.brown400
    },
    line: {
        width: "30%",
        borderTopWidth: 1,
        borderTopColor: colors.brown300,
    },
    form: {
        gap: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.brown400,
        borderRadius: 4,
        fontSize: 16,
        paddingHorizontal: 6,
    },
    errormsg: {
        color: "red",
        fontSize: 12
    }
});