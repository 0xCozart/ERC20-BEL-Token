// Checks for injected web3 instance, if not provided --> fallback connection to running Ganache instance
const Web3 = require("web3");

exports.module = () => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    } else {
      alert(
        "Please install and Ethereum extension like MetaMask to use this dApp!"
      );
    }
  } catch (e) {
    console.error("WEB3 ERROR: ", e);
  }
};
