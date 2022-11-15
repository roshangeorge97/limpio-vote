// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Election{
    uint public CandidateOneCount;
    uint public CandidateTwoCount;
    string public CandidateOne;
    string public CandidateTwo;

   constructor(string memory _CandidateOne, string memory _CandidateTwo){
       CandidateOne = _CandidateOne;
       CandidateTwo = _CandidateTwo;
   }

   mapping(address => bool) YourVote;

   modifier onlySatisfy{
       require(YourVote[msg.sender] == false,"you already voted!");
       _;
   }
    
    function VoteCandidateOne()public onlySatisfy{
        YourVote[msg.sender] = true;
        CandidateOneCount++;
    }

    function VoteCandidateTwo()public onlySatisfy{
        YourVote[msg.sender] = true;
        CandidateTwoCount++;
    }

}