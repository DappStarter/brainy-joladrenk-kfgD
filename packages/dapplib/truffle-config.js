require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name release sad method good nasty fortune stove'; 
let testAccounts = [
"0x9669625d9cbc9a910cb1e8980457881c144e36f69eb0fdbd20bc5dd412023af3",
"0xb3246f6e9e07ba05c1ad34aeccd4e91a86d01090c2648133300b65b738769032",
"0xb61213e64d34ec1fd9612e3124da44baa682d473bba2410aa27181d056bfeab9",
"0xdc267496f1360231ac100cce8fa4a4094ae2fcaf9348e6f453a40b3f964880ca",
"0x1f8442e563d2854ffabb7a488313e63e1c336e45b97f84423b763bcc641cd8eb",
"0x664814b5adf672e4e321015f69b101a9e2f62a7bdd119c31d77d7ed9c96cf4b5",
"0xe2ec2e316bfb17e7ca58c5f2428dbc0d44847f93155ead2c07c58cba70046de6",
"0x56e6735cbb4ab3b624911e8ff929bf7fe713aa988216c195fb19319fb6eae73e",
"0x62a0e449ed816893248c0c92f2ae3560d6db3dd34af10f4bf0a2a35b30f7b71a",
"0xff0bea52c272b2b39e6d214ca454ee075c6b0ce5379e9988cfa769752d7cc273"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


