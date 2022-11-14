import { useState,useEffect } from "react"
import { ethers } from "ethers";


const Addressinput = () => {



 var [address, setaddress] = useState("")
 const [defaultname1, setName1] = useState(null)
 const [defaultvotes1, setVotes1] = useState(null)
 const [defaultname2, setName2] = useState(null)
 const [defaultvotes2, setVotes2] = useState(null)

 const addAccount = (e) => {
    e.preventDefault();
    var interval;
 var provider = new ethers.providers.Web3Provider(window.ethereum)
 var signer = provider.getSigner();

 var abi = [
         {
             "inputs": [
                 {
                     "internalType": "string",
                     "name": "_CandidateOne",
                     "type": "string"
                 },
                 {
                     "internalType": "string",
                     "name": "_CandidateTwo",
                     "type": "string"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "constructor"
         },
         {
             "inputs": [],
             "name": "VoteCandidateOne",
             "outputs": [],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "VoteCandidateTwo",
             "outputs": [],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "CandidateOne",
             "outputs": [
                 {
                     "internalType": "string",
                     "name": "",
                     "type": "string"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "CandidateOneCount",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "CandidateTwo",
             "outputs": [
                 {
                     "internalType": "string",
                     "name": "",
                     "type": "string"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "CandidateTwoCount",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         }
     ]

 var contract = new ethers.Contract(address,abi,signer)
 contract.CandidateOne().then((result) => {
     setName1(result)
 })
 contract.CandidateTwo().then((result) => {
    setName2(result)
})
 interval = setInterval(()=>{
     Votes()
 },10*1000)

 return()=>{
 clearInterval(interval)
 }

 }


 const Votes = () =>{
     var provider = new ethers.providers.Web3Provider(window.ethereum)
     var signer = provider.getSigner();
     
     var abi = [
             {
                 "inputs": [
                     {
                         "internalType": "string",
                         "name": "_CandidateOne",
                         "type": "string"
                     },
                     {
                         "internalType": "string",
                         "name": "_CandidateTwo",
                         "type": "string"
                     }
                 ],
                 "stateMutability": "nonpayable",
                 "type": "constructor"
             },
             {
                 "inputs": [],
                 "name": "VoteCandidateOne",
                 "outputs": [],
                 "stateMutability": "nonpayable",
                 "type": "function"
             },
             {
                 "inputs": [],
                 "name": "VoteCandidateTwo",
                 "outputs": [],
                 "stateMutability": "nonpayable",
                 "type": "function"
             },
             {
                 "inputs": [],
                 "name": "CandidateOne",
                 "outputs": [
                     {
                         "internalType": "string",
                         "name": "",
                         "type": "string"
                     }
                 ],
                 "stateMutability": "view",
                 "type": "function"
             },
             {
                 "inputs": [],
                 "name": "CandidateOneCount",
                 "outputs": [
                     {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                     }
                 ],
                 "stateMutability": "view",
                 "type": "function"
             },
             {
                 "inputs": [],
                 "name": "CandidateTwo",
                 "outputs": [
                     {
                         "internalType": "string",
                         "name": "",
                         "type": "string"
                     }
                 ],
                 "stateMutability": "view",
                 "type": "function"
             },
             {
                 "inputs": [],
                 "name": "CandidateTwoCount",
                 "outputs": [
                     {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                     }
                 ],
                 "stateMutability": "view",
                 "type": "function"
             }
         ]
 
     var contract = new ethers.Contract(address,abi,signer)
     contract.CandidateOneCount().then((result)=>{
     setVotes1(parseInt(result))
     }
     )
     contract.CandidateTwoCount().then((result)=>{
        setVotes2(parseInt(result))
        })
 }

useEffect(()=>{
 
},[])



const vote = () =>{
 var provider = new ethers.providers.Web3Provider(window.ethereum)
 var signer = provider.getSigner();

 var abi = [
         {
             "inputs": [
                 {
                     "internalType": "string",
                     "name": "_CandidateOne",
                     "type": "string"
                 },
                 {
                     "internalType": "string",
                     "name": "_CandidateTwo",
                     "type": "string"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "constructor"
         },
         {
             "inputs": [],
             "name": "VoteCandidateOne",
             "outputs": [],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "VoteCandidateTwo",
             "outputs": [],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "CandidateOne",
             "outputs": [
                 {
                     "internalType": "string",
                     "name": "",
                     "type": "string"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "CandidateOneCount",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "CandidateTwo",
             "outputs": [
                 {
                     "internalType": "string",
                     "name": "",
                     "type": "string"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "CandidateTwoCount",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         }
     ]

 var contract = new ethers.Contract(address,abi,signer)
 contract.VoteCandidateOne().then(console.log)
 contract.VoteCandidateTwo().then(console.log)
}


    return(
        <>
         <div>
   <h1 className="name">Name : Candidate 1 {defaultname1}</h1>
   <h3>No of Votes : {defaultvotes1}</h3>
   <button onClick={vote}>Vote</button>
   </div>
   <>
   <h1 className="name">Name : Candidate 2 {defaultname2}</h1>
    <h3>No of Votes : {defaultvotes2}</h3>
    <button onClick={vote}>Vote</button>
    </>
      
        <form onSubmit={addAccount}>
        <input className="ads-inp" onChange={(e)=>setaddress(e.target.value)} value={address}></input>
        <button className="submit" type="submit">Submit</button>
        </form>
        </>
    )
}

export default Addressinput