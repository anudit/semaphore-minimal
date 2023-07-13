const nodelibs = require("node-libs-react-native");
const expoCryptoPolyfills = require("expo-crypto-polyfills");


nodelibs.crypto = `${__dirname}/utils/crypto.js`;

module.exports = {
    resolver: {
        extraNodeModules: { ...expoCryptoPolyfills, 'constants': nodelibs['constants'] },
    },
};