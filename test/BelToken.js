/*
******************************** FUTURE REFERENCE ********************************

              <> R.E. Working with BN in EVM hardfork Muir Glacier <>
  * The <.toNumber()> method for BN available through web3.utils will not create * 
    a JS readable integer if the BN is larger than 53bits. The <.bitLength()>
    is available to check BN. 

    - Work arounds include passing the BN to <.toString()> and then through 
      <parseFloat(string)>.
*/

// Creates a abstract contract to allow for ABI testing
const BelToken = artifacts.require('BelToken')

// accounts --> list of addresses initiated with the clean test net environment
contract('BelToken', async (accounts) => {
  beforeEach(async () => {
    this.BelToken = await BelToken.deployed()
  })

  it("Checks if account at index '0' has correct supply of BelTokens", async () => {
    // let instance = await BelToken.deployed()
    let balance = await this.BelToken.balanceOf(accounts[0])
    expect(balance.toString()).to.equal('700000')
  })

  it('Should process token transfer transaction', async () => {
    // Create readable parameters
    let account_one = accounts[0]
    let account_two = accounts[1]
    let amount = 10

    // Get balance of accounts before tx from
    let acc_one_balance_before = await this.BelToken.balanceOf.call(account_one)
    let acc_two_balance_before = await this.BelToken.balanceOf.call(account_two)

    // Creates
    await this.BelToken.transfer(account_two, amount)

    let acc_one_balance_after = await this.BelToken.balanceOf.call(account_one)
    let acc_two_balance_after = await this.BelToken.balanceOf.call(account_two)

    expect(acc_one_balance_before.toNumber() - amount).to.equal(
      acc_one_balance_after.toNumber(),
      'Account[0] end amount is incorrect',
    )
    expect(acc_two_balance_before.toNumber() + amount).to.equal(
      acc_two_balance_after.toNumber(),
      'Account[1] end amount is incorrect',
    )
  })
})
