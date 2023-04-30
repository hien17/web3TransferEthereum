// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Transactions {
   uint256 transactionCount;

   event Transfer(address from, address receiver, uint amout, string message, uint256 timestamp, string keyword);

   struct TransferStruct {
    address sender;
    address receiver;
    uint amout;
    string message;
    uint256 timestamp;
    string keyword;
   } 

   TransferStruct[] transactions;

   function addToBlockchain(address payable receiver, uint amout, string memory message, string memory keyword) public {
    transactionCount += 1;
    transactions.push(TransferStruct(msg.sender, receiver, amout, message, block.timestamp, keyword));
     
     emit Transfer(msg.sender, receiver, amout, message, block.timestamp, keyword);
   }
   function getAllTransactions() public view returns (TransferStruct[] memory){
    //return transactions
    return transactions;
   }
   function getTransactionCount() public view returns (uint256){
    // return count of blockchain
    return transactionCount;
   }
}