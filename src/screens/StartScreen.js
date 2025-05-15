import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { showPlatformMessage } from '../components/NativeInfo';

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={styles.title}>Choose dice amount:</Text>

                <View style={styles.dice}>
                    <TouchableOpacity onPress={() => navigation.navigate('One')}>
                        <View style={styles.diceWrapper}>
                            <Image
                                style={styles.diceImage}
                                source={require('../../assets/one.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Two')}>
                        <View style={styles.diceWrapper}>
                            <Image
                                style={styles.diceImage}
                                source={require('../../assets/two.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomButton}>
                <TouchableOpacity style={styles.nativeButton} onPress={showPlatformMessage}>
                    <Text style={styles.nativeButtonText}>Show Platform Message</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginBottom: 40,
        textAlign: 'center',
        fontFamily: 'monospace'
    },
    dice: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    diceWrapper: {
        padding: 15,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 12,
        marginHorizontal: 20,
    },
    diceImage: {
        width: 130,
        height: 130,
        borderRadius: 8,
    },
    nativeButton: {
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#999',
    },
    nativeButtonText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'monospace',
    },
    topContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomButton: {
        paddingBottom: 30,
        alignItems: 'center',
    },


});

export default StartScreen;
