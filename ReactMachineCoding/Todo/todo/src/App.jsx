import React, { useState } from 'react'

const App = () => {
 const[array , setarray] = useState([]);
  return (
    <div>
  
     <form action="" onSubmit={handlesubmit}>
     
           <div>
               <input type="text" required />
           <button type='submit' > send </button>
           </div>
                          
        
     </form>

     <div>
         {
             array.map((val)=>{
                
                 return(
                     <div>
                         <h1>
                             {val}
                         </h1>
                         <button>edit</button>
                         <button>delete</button>
                     </div>
                 )
                  


             })
         }
     </div>
 
    </div>
  )
}

export default App