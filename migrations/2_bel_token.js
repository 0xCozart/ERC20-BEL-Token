const BelToken = artifacts.require("BelToken");

module.exports = function (deployer) {
  deployer.deploy(BelToken);
};
