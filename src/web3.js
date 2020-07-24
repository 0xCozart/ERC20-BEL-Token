const infura = require("./infuraProvider");
const Web3 = require("web3");

module.exports = new Web3(infura);
