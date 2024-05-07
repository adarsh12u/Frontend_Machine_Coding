import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo , deleteTodo , EditTodo } from './Store/slice';
const App = () => {
    const data = useSelector((state)=>state.todo)
    const dispatch  = useDispatch();
 console.log(data)

    const [todo , setTodo] = useState();

 const updatelocalstorage = (data)=>{
      
     localStorage.setItem("todo",data)
    
 }
 const  handlesubmit = (e)=>{
       e.preventDefault();
     
dispatch(addTodo(todo))
       
       setTodo('')
 }
 const deletes = (id)=>{
       const dataarray = array.filter((val)=>val.id !==  id)
       setarray(dataarray);
       updatelocalstorage(JSON.stringify(dataarray))
  } 
 const edit = (id)=>{
    const obj = data.item.find((val)=>val.id === id)
    console.log(obj)
     setTodo(obj.todo)
       dispatch(EditTodo(id));
 }

  return (
    <div>
  
     <form action="" onSubmit={handlesubmit}>
     
           <div>
               <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} required />
           <button type='submit' > send </button>
           </div>
                          
        
     </form>

     <div>
         {
              data.item.map((val , id)=>{
                
                 return(
                     <div>
                         <h1>
                             {val.todo}
                         </h1>
                         <button onClick={()=>edit(val.id)}>edit</button>
                         <button onClick={()=>dispatch(deleteTodo(val.id))}>delete</button>
                     </div>
                 )
                  


             })
          }      </div>
 
    </div>
  )
}

export default App