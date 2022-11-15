import { useState,useEffect } from "react"
import { ethers } from "ethers";
import './App.css'


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


const vote1 = () =>{
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
}

const vote2 = () =>{
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
    contract.VoteCandidateTwo().then(console.log)
 }

    return(
        <>
         
   <div className="container">   
   <div class="box">  
   <div style={{margin:'50px'}}>
   <h1 className="name">Name : Candidate 1 {defaultname1}</h1>
   <h3>No of Votes : {defaultvotes1}</h3>
   <button class="btn btn-light" style={{margin:'25px'}} onClick={vote1}>Vote</button>
   </div> 
   <div style={{margin:'50px'}}>
   <h1 className="name">Name : Candidate 2 {defaultname2}</h1>
    <h3>No of Votes : {defaultvotes2}</h3>
    <button class="btn btn-light" style={{margin:'25px'}} onClick={vote2}>Vote</button>
    </div>
    </div>   
      
        <form onSubmit={addAccount}>
        
  <div class="input-group mb-2 mr-sm-2 ads-inp">
    
    <div class="input-group-prepend">
      <div class="input-group-text">Contract Address</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="0x" onChange={(e)=>setaddress(e.target.value)} value={address} />
  </div>
  <br></br>
        <button type="submit" class="btn btn-light">Submit</button>


        </form>
        </div>
        </>
    )
}

export default Addressinput