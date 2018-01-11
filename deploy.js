const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'hold shine response boy honey unfold cruel prize rocket shiver away glass',
    'https://rinkeby.infura.io/j3zOEmJDByncNzjFP3OP'
);
const web3 = new Web3(provider);
