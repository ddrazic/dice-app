import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, Animated, Text, Platform } from 'react-native';

const diceImages = [
    require('../../assets/dice1.png'),
    require('../../assets/dice2.png'),
    require('../../assets/dice3.png'),
    require('../../assets/dice4.png'),
    require('../../assets/dice5.png'),
    require('../../assets/dice6.png'),
];

const TwoDice = () => {
    const [dice1Index, setDice1Index] = useState(0);
    const [dice2Index, setDice2Index] = useState(0);

    const rotation1 = useRef(new Animated.Value(0)).current;
    const rotation2 = useRef(new Animated.Value(0)).current;

    const rollDices = () => {
        Animated.parallel([
            Animated.sequence([
                Animated.timing(rotation1, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(rotation1, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
            Animated.sequence([
                Animated.timing(rotation2, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(rotation2, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();

        const newIndex1 = Math.floor(Math.random() * 6);
        const newIndex2 = Math.floor(Math.random() * 6);

        setTimeout(() => {
            setDice1Index(newIndex1);
            setDice2Index(newIndex2);
        }, 150);
    };

    const spin1 = rotation1.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const spin2 = rotation2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const sum = dice1Index + dice2Index + 2;

    return (
        <TouchableWithoutFeedback onPress={rollDices}>
            <View style={styles.container}>
                <View style={styles.diceRow}>
                    <Animated.Image
                        source={diceImages[dice1Index]}
                        style={[styles.dice, { transform: [{ rotate: spin1 }] }]}
                    />
                    <Animated.Image
                        source={diceImages[dice2Index]}
                        style={[styles.dice, { transform: [{ rotate: spin2 }] }]}
                    />
                </View>
                <Text style={styles.sumText}>Sum: {sum}</Text>
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
    diceRow: {
        flexDirection: 'row',
        gap: 30,
        marginBottom: 30,
    },
    dice: {
        width: 130,
        height: 130,
    },
    sumText: {
        color: 'grey',
        fontSize: 24,
        fontFamily: Platform.select({
            ios: 'Courier',
            android: 'monospace',
            default: 'monospace',
        }),
    },
});

export default TwoDice;