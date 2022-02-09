/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const fs = require('fs');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');

task("accounts", "Prints the list of accounts", async (_taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


const mnemonic = fs.readFileSync('.seed-phrase').toString().trim();

module.exports = {
  solidity: "0.8.0",
  networks: {
    local: {
      url: 'http://localhost:8545',
      accounts: {
        mnemonic,
        initialIndex: 0,
        path: "m/44'/60'/0'/0",
        count: 5,
      },
    }
  }
};
