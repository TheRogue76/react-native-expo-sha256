# react-native-expo-sha256

A hasher (MD6, SHA-1, SHA-256, SHA-384, SHA-512) written using the new expo modules that supports all React native architectures.

It uses expo modules under the hood to handle JSI support and fall back to bridged mode if JSI is not available.

it's a spiritual successor to my other package [react-native-hashing](https://github.com/TheRogue76/react-native-hashing) but it is less cpp code
so it should be easier to maintain and fork if needed

# API documentation

```ts
import { md5, sha1, sha256, sha384, sha512 } from "react-native-expo-sha256";
// ...
let input = "Hello there"

let result = md5(input); // e8ea7a8d1e93e8764a84a0f3df4644de
or
result = sha1(input); // 726c76553e1a3fdea29134f36e6af2ea05ec5cce
or
result = sha256(input); // 4e47826698bb4630fb4451010062fadbf85d61427cbdfaed7ad0f23f239bed89
or
result = sha384(input); // 7438e0294c534d6ca6cc2efb04a60db488c86b66c4cbd3c00d11d58c8020274ab0a2a720c88986968d894f26b16c461f
or
result = sha512(input); // 567683ddba1f5a576b68ec26f41ffbcc7e718d646839ac6c2ef746fe952cef4cbe6dea635bc2f098b92b65caacf482333bb9d1d9a3089bc4f01cb86f7a2fbc18
```

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/versions/latest/introduction/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install react-native-expo-sha256
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.


### Configure for Android

None

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide]( https://github.com/expo/expo#contributing).
