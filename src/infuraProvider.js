require("dotenv").config({ path: __dirname + "/../.env" });
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.INFURA_API,
  0,
  1,
  true,
  "m/44'/1'/0'/0/"
);
