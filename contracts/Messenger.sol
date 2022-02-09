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

  function add(string memory newMessage) public {
    require(msg.sender == owner);
    messages.push(newMessage);
  }

  function count() view public returns(uint) {
    return messages.length;
  }

  function getMessages(uint index) view public returns (string memory) {
    return messages[index];
  }

}
