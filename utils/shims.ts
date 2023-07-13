/* eslint-disable @typescript-eslint/no-var-requires */
// import "react-native-wasm";
import * as WebAssembly from 'react-native-webassembly';
import 'text-encoding-polyfill';

const base64 = require('base-64');

global.btoa = global.btoa || base64.encode
global.atob = global.atob || base64.decode
global.Buffer = require("buffer").Buffer;

console.log(WebAssembly)

global.process = require("process");
global.process.env.NODE_ENV = __DEV__ ? "development" : "production";
global.process.version = "v9.40.0";

global.location = {
    protocol: "https",
};


// https://github.com/expo/expo/issues/17270#issuecomment-1445149952
// Polyfill for expo-crypto until issue with react-native-get-random-values is solved
// Apply only with Expo SDK >= 48

import { getRandomValues as expoCryptoGetRandomValues } from 'expo-crypto';

class Crypto {
    getRandomValues = expoCryptoGetRandomValues
}

const webCrypto = typeof crypto !== 'undefined' ? crypto : new Crypto()

    ; (() => {
        if (typeof crypto === 'undefined') {
            Object.defineProperty(window, 'crypto', {
                configurable: true,
                enumerable: true,
                get: () => webCrypto
            })
        }
    })()


console.log('Shims injected');
