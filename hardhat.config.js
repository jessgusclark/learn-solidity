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
    rsktestnet: {
      chainId: 31,
      url: 'https://public-node.testnet.rsk.co/',
      gasPrice: Math.floor(0x387ee40 * 1.1),
      gasMultiplier: 1.1,
      accounts: {
        mnemonic: mnemonic,
        initialIndex: 0,
        path: "m/44'/60'/0'/0",
        count: 10,
      },
    },
    binancetestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {
        mnemonic: mnemonic,
      }
    },
  }
};
