import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: "6%",
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight: "700",
        fontSize: 32,
        color: "white",
        
    },
});