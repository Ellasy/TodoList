import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

export default function form({ addHandler }) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Впишите задачу..." />
                <Button
                    color="green"
                    onPress={() => addHandler(text)}
                    title="Добавить задачу"
                />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 24, 
        outline: 0,
        textAlign: "center",
        padding: 12,
        width: "60%",
        borderBottomWidth: 2,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: "20%",
        outline: 0,
    }

});