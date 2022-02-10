# Learnin' Solidity

## Setup

1. Create file `.seed-phrase` with a mnemonic.


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
