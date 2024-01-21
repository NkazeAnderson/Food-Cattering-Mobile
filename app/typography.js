import { Inter_500Medium } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";

const inter400 = "Inter_400Regular";
const inter500 = "Inter_500Medium";
const inter600 = "Inter_600SemiBold";
const inter700 = "Inter_700Bold";
export default typography = StyleSheet.create({
    hLarge: {
        fontFamily: inter700,
        fontSize: 32,
        lineHeight: 40,
    },
    hMedium: {
        fontFamily: inter700,
        fontSize: 28,
        lineHeight: 36,
    },
    hSmall: {
        fontFamily: inter600,
        fontSize: 24,
        lineHeight: 32,
    },
    titleLarge: {
        fontFamily: inter500,
        fontSize: 22,
        lineHeight: 28,
    },
    titleMedium: {
        fontFamily: inter500,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15
    },
    titleSmall: {
        fontFamily: inter600,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1
    },
    bodyLarge: {
        fontFamily: inter400,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5
    },
    bodyMedium: {
        fontFamily: inter400,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25
    },
    bodySmall: {
        fontFamily: inter400,
        fontSize: 12,
        lineHeight: 16
    },
    labelLarge: {
        fontFamily: inter600,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1
    },
    labelMedium: {
        fontFamily: inter600,
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5
    },
    displaySmall: {
        fontFamily: inter700,
        fontSize: 36,
        lineHeight: 44,
    },
})