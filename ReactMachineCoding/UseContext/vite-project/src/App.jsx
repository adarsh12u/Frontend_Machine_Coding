import React from 'react'
import {useContext} from 'react'

import { context } from './Context';
const App = () => {
  const data  =  useContext(context);
   console.log(data)
  return  (
             <div>
                {}
             </div>
  )
}

export default App