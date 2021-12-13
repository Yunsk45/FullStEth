//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
   string public name = "Token Yu";
   string public symbol = "TKY";
   uint public totalSupply = 1000000;
   mapping (address => uint) balances;

   constructor() {
      balances[msg.sender] = totalSupply;   
   }

   function transfer(address to, uint amount) external {
      require(balances[msg.sender]>= amount, "Insufficient funds");
      balances[msg.sender] -= amount;
      balances[to] += amount;
   }

   function balanceOf(address account) external view returns (uint) {
      return balances[account];
   }
}
