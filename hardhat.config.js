
require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('dotenv').config()
const { url, mnemonic } = require('./secrets.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 module.exports = {
  paths: {
    artifacts: './src/artifacts',
  },

  networks: {
    hardhat: {
      chainId: 1337
    },
     ropsten: {
      url:url ,
       accounts: {mnemonic: mnemonic},
       networkCheckTimeout:240000
     }
  },
  solidity: "0.8.3"
};


