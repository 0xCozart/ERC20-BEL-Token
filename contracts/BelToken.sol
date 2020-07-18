// SPDX-License-Identifier: MIT
pragma solidity ^0.6.9;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BelToken is ERC20 {
    uint256 public INIT_SUPPLY = 700000;

    constructor() public ERC20("Bel", "BEL") {
        _mint(msg.sender, INIT_SUPPLY);
    }
}
