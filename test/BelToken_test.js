/*
******************************** FUTURE REFERENCE ********************************

              <> R.E. Working with BN in EVM hardfork Muir Glacier <>
  * The <.toNumber()> method for BN available through web3.utils will not create * 
    a JS readable integer if the BN is larger than 53bits. The <.bitLength()>
    is available to check BN. 

    - Work-arounds include passing the BN to <.toString()> and then through 
      <parseFloat(string)>.
*/

// Creates a abstract contract to allow for ABI testing
const BelToken = artifacts.require("BelToken");
const should = require("chai").should();
const truffleAssertion = require("truffle-assertions");

// accounts --> list of addresses initiated with the clean test net environment
contract("BelToken", async (accounts) => {
  beforeEach(async () => {
    this.BelToken = await BelToken.deployed();
  });

  it("Should return total supply of Bel Tokens.", async () => {
    // let instance = await BelToken.deployed()
    let balance = await this.BelToken.balanceOf(accounts[0]);
    expect(balance.toString()).to.equal("700000");
  });

  it("Should process token transfer transaction.", async () => {
    // Params
    let account_one = accounts[0];
    let account_two = accounts[1];
    let amount = 10;

    // Call for balance before tx
    let acc_one_balance_before = await this.BelToken.balanceOf(account_one);
    let acc_two_balance_before = await this.BelToken.balanceOf(account_two);

    // Executes tx
    await this.BelToken.transfer(account_two, amount);

    // Call for balance after tx
    let acc_one_balance_after = await this.BelToken.balanceOf(account_one);
    let acc_two_balance_after = await this.BelToken.balanceOf(account_two);

    expect(acc_one_balance_before.toNumber() - amount).to.equal(
      acc_one_balance_after.toNumber(),
      "Account[0] end amount is incorrect"
    );
    expect(acc_two_balance_before.toNumber() + amount).to.equal(
      acc_two_balance_after.toNumber(),
      "Account[1] end amount is incorrect"
    );
  });

  it("Should return 'Bel' as name.", async () => {
    let name = await this.BelToken.name();
    expect(name).to.equal("Bel");
  });

  it("Should return 'BEL' as symbol.", async () => {
    let symbol = await this.BelToken.symbol();
    symbol.should.equal("BEL");
  });

  it("Should return 18 as decimal.", async () => {
    let decimal = await this.BelToken.decimals();
    decimal.toNumber().should.equal(18);
  });
});
