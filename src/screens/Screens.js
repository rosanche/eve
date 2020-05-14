import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen = ({ name }) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#bbbbbb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: { fontSize: 28, color: "#222222", textAlign: "center" }
});

export const SearchScreen = () => <Screen name="Search" />;
export const AddScreen = () => <Screen name="Add" />;
export const ProfileScreen = () => <Screen name="Profile" />;
