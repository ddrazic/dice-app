## Struktura projekta

```
dice-app/
├── .expo/
├── assets/
├── node_modules/
├── src/
├── .gitignore
├── .npmrc
├── App.js
├── app.json
├── eas.json
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Pokretanje aplikacije lokalno
```
git clone https://github.com/ddrazic/dice-app.git
cd dice-app
```


## Instalacija paketa
```
npm install
```

## Pokretanje aplikacije
```
npx expo start
```

## Otvaranje aplikacije na Android ili iOS uređaju

1. Instalirati aplikaciju Expo Go (Google Play/App Store).
2. Računalo i mobitel trebaju biti spojeni na istu Wi-Fi mrežu.
3. Skenirati QR kod nakon pokrenutog Metro Bundlera (npx expo start).
4. Ukoliko se aplikacija i dalje ne otvara, potrebno je ugasiti Windows Defender Firewall u Control Panelu i pokušati ponovno.

## Otvaranje aplikacije u Android Studiu
1. Preuzmite Android Studio sa službene web stranice https://developer.android.com/studio
2. Stvorite novi virtualni uređaj: 
Kliknite "+ Create Virtual Device".
Odaberite hardver (npr., "Phone" i "Pixel 6").
U AVD Manageru, kliknite zelenu ikonu "Play" pored vašeg AVD-a.
4. Nakon pokrenutog Metro Bundlera (npx expo start) pritisnite tipku a na tipkovnici. Aplikacija će se pokrenuti na emulatoru.

## Otvaranje aplikacije u Xcodeu (samo za MacBook)
1. Preuzmite Xcode s App Store na Mac računalu.
2. Nakon instalacije Xcodea, otvorite Terminal i pokrenite:
```
xcode-select --install
```
3. Stvorite novi virtualni uređaj (Simulator):
File > New Simulator....
Odaberite Device Type (npr., "iPhone 15 Pro Max")
Simulator će se automatski pokrenuti nakon što ga stvorite, ili ga možete pokrenuti iz Xcode > Open Developer Tool > Simulators i odabirom vašeg simulatora.
4. Nakon pokrenutog Metro Bundlera (npx expo start) pritisnite tipku i na tipkovnici. Aplikacija će se pokrenuti na simulatoru.