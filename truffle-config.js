require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },

    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          process.env.INFURA_API,
          0, // <-- Defaults
          1, // <--
          true, // <--
          "m/44'/1'/0'/0/" // <--
        );
      },
      network_id: "3",
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  mocha: {
    timeout: 100000,
    useColors: true,
  },

  compilers: {
    solc: {
      version: "v0.6.9+commit.3e3065ac",
    },
  },
};
