import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ethers } from 'ethers'
import ConnectProvider from './connectionProviders'
import Addressinput from './addressInput'

function App() {
  return (
    <>
    <h1 style={{color:'#CC444B'}}>
      Vote your Candidate!
    </h1>
    <ConnectProvider/>
    <Addressinput/>
   </>
  )
}

export default App
