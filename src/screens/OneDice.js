import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';

const diceImages = [
    require('../../assets/dice1.png'),
    require('../../assets/dice2.png'),
    require('../../assets/dice3.png'),
    require('../../assets/dice4.png'),
    require('../../assets/dice5.png'),
    require('../../assets/dice6.png'),
];

const OneDice = () => {
    const [diceIndex, setDiceIndex] = useState(0);
    const rotation = useRef(new Animated.Value(0)).current;

    const rollDice = () => {
        Animated.sequence([
            Animated.timing(rotation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(rotation, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
            }),
        ]).start();

        const newIndex = Math.floor(Math.random() * 6);
        setTimeout(() => {
            setDiceIndex(newIndex);
        }, 150);
    };

    const spin = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <TouchableWithoutFeedback onPress={rollDice}>
            <View style={styles.container}>
                <Animated.Image
                    source={diceImages[diceIndex]}
                    style={[styles.dice, { transform: [{ rotate: spin }] }]}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dice: {
        width: 150,
        height: 150,
    },
});

export default OneDice;
