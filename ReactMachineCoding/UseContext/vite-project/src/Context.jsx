import { createContext } from "react";
import React,{useState} from 'react'

export const context = createContext();


const Context = ({children}) => {

    const[cart ,setcart] = useState(["name" , "adarsh"]);
  return (
    <context.Provider value={cart}>
          
            {children}
          
    </context.Provider>
  )
}

export default Context