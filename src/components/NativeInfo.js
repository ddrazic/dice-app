import { Platform, Alert, ToastAndroid } from 'react-native';

export const showPlatformMessage = () => {
    if (Platform.OS === 'android') {
        ToastAndroid.show('Greetings from Android!', ToastAndroid.SHORT);
    } else if (Platform.OS === 'ios') {
        Alert.alert('iOS poruka', 'Greetings from iOS!');
    } else {
        console.log('Nepoznata platforma');
    }
};
