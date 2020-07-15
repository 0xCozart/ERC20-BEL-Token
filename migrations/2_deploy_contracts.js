const Fibonacci = artifacts.require("Fibonacci");
const BelTken = artifcats.require("BelToken");
module.exports = function (deployer) {
  deployer.deploy(Fibonacci);
};
