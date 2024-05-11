
import React from 'react'
import {useState} from 'react'
const Provider = ({children}) => {
  const [user,setuser] = useState();
    return (
    <div>Provider</div>
  )
}

export default Provider