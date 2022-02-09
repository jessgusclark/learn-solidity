# Learnin' Solidity

## Setup

1. Create file `.seed-phrase` with a mnemonic.

## Deployed Contracts

| Contract Name | RSK Testnet Address |
| --- | --- |
| Greeter.sol | [0x3970c2EBa978535853F55d9ceD5721B4AcB8Edf7](https://explorer.testnet.rsk.co/address/0x3970c2eba978535853f55d9ced5721b4acb8edf7) |
| Messenger.sol | [0xaeAf7669603CDAcB1551bd8a3C835A0e7bBa6983](https://explorer.testnet.rsk.co/address/0xaeaf7669603cdacb1551bd8a3c835a0e7bba6983?__ctab=general)

## Console Example

```
const abi = [...] // found in /artifacts/contracts/NAME.sol/NAME.json
const contractAddress = ''

const signer = await hre.ethers.getSigner()

const contract = new ethers.Contract(contractAddress, abi, signer)

await contract.count()
await contract.add('Hello World!')
await contract.getMessage(0)
```
