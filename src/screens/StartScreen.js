import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, Platform, Alert } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';
import { showPlatformMessage } from '../components/NativeInfo';

const StartScreen = ({ navigation }) => {

    const authenticateBiometricsAndroid = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (!hasHardware) {
            Alert.alert('Greška', 'Vaš uređaj ne podržava otisak prsta.');
            return;
        }

        if (!isEnrolled) {
            Alert.alert('Greška', 'Nijedan otisak prsta nije postavljen na uređaju.');
            return;
        }

        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Koristite otisak prsta za nastavak na dvije kockice.',
            disableDeviceFallback: true,
            cancelLabel: 'Odustani',
        });

        if (result.success) {
            Alert.alert('Uspjeh!', 'Autentifikacija otiskom prsta uspješna.');
            navigation.navigate('Two');
        } else if (result.error === 'user_fallback') {
            Alert.alert('Odustali ste', 'Odustali ste od autentifikacije otiskom prsta.');
        } else if (result.error === 'system_cancel') {
            Alert.alert('Prekinuto', 'Sustav je prekinuo autentifikaciju.');
        } else if (result.error === 'lockout') {
            Alert.alert('Zaključano', 'Previše neuspješnih pokušaja. Otisak prsta je privremeno zaključan.');
        }
        else {
            Alert.alert('Neuspjeh', 'Autentifikacija otiskom prsta neuspješna. Pokušajte ponovno.');
            console.log("Autentifikacija neuspješna: ", result.error);
        }
    };

    const handleTwoDicePress = () => {
        if (Platform.OS === 'android') {
            authenticateBiometricsAndroid();
        } else {

            navigation.navigate('Two');
        }
    };

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

                    <TouchableOpacity onPress={handleTwoDicePress}>
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
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 24,
        marginBottom: 40,
        textAlign: 'center',
        fontFamily: Platform.select({
            ios: 'Courier',
            android: 'monospace',
            default: 'monospace',
        }),
    },
    dice: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    diceWrapper: {
        padding: 10,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    diceImage: {
        ...Platform.select({
            ios: {
                width: 115,
                height: 115,
            },
            android: {
                width: 100,
                height: 100,
            },
            default: {
                width: 100,
                height: 100,
            }
        }),
        borderRadius: 8,
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
    platformSpecificText: {
        color: '#555',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 10,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    nativeButton: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#999',
    },
    nativeButtonText: {
        color: 'grey',
        fontSize: 12,
        fontFamily: 'monospace',
    },
});

export default StartScreen;
