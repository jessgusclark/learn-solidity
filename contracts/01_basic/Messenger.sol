// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Messenger {
  address owner;
  string[] messages;

  // you don't have to specify visibility on the constructor 
  // unless it is non-deployable, i.e. abstract
  constructor() {
    owner = msg.sender;
  }

  // a function that modifies the state
  function add(string memory newMessage) public {
    require(msg.sender == owner);
    messages.push(newMessage);
  }

  // VIEW promises to read but not write to the state
  function count() view public returns(uint) {
    return messages.length;
  }

  function getMessages(uint index) view public returns (string memory) {
    return messages[index];
  }

  // private functions can only be called within the contract
  function getMelody() pure private returns(string memory) {
    return 'lalalalalala';
  }

  // PURE does not read or write to the state, it can only
  // access other pure functions.
  function sing() pure public returns(string memory) {
    return getMelody();
  }
}
