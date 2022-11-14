import { useState } from "react";
import { FormGroup } from "@mui/material";
import {FormControlLabel}from "@mui/material";
import {Switch}from "@mui/material";



const ConnectProvider = () => {
    const [defaultProvider, setProvider] = useState("Connect to Metamask")
    const enableProvider = () => {
        if (typeof window.ethereum !== 'undefined') {
            try{
                const func = async() => {
                    const {ethereum} = window;
                    await ethereum.request({ method :'eth_requestAccounts' });
                    setProvider("Connected")
                }
                func()
            }
            catch(error){
                console.log(error)
            }
          }
    }
    return(
        <div>
            <FormGroup>
            <FormControlLabel control={<Switch />} Label={defaultProvider} onClick={enableProvider} className="Provider" />
            </FormGroup>    
        </div>
    )
}

export default ConnectProvider;