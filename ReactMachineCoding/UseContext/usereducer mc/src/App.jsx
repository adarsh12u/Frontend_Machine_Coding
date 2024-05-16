import React from 'react'
import { useReducer } from 'react'
import redurcer from './redurcer'
import { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
   
  
  const[products , dispatch] = useReducer(redurcer ,{
      products:[],
      cart:[]
  } )
console.log(products)

  const fetchs = ()=>{
         fetch("https://fakestoreapi.com/products").then((res)=>{
              return res.json();         
       }).then((res)=>{
         dispatch({
            type:"ADD_DATA",
            payload:res
         })
       })
       
  }
  useEffect(()=>{
       fetchs();
  },[])
  return (



    <div className=' firstdiv'> 
        
           <div className='width-poducts'>
             <div className='carddiv'>
                {
                     products.products.map((val)=>{
                       return <div className='card'>
                                       <h1>{val.title}</h1>
                                        <img src={val.image} className='image' alt="" />
                                        <p>{val.description}</p>
                         {

                             products.cart.some((vals)=>vals.id === val.id) == true  ?              <button onClick={()=>dispatch({type:"REMOVE_CART",payload:val.id})}>remove to cart</button>
                         :
                         <button onClick={()=>dispatch({type:"ADD_CART",payload:val})}>Add to cart</button>
                          
                          }
                               </div>
                     })
                }
                     
              </div>
           </div>
            <div className='width-Cart'>
               {
                      products.cart.map((val)=>{
                        return <div className='card'>
                        <h1>{val.title}</h1>
                         <img src={val.image} className='image' alt="" />
                         <p>{val.description}</p>
                         
                          <button onClick={()=>dispatch({type:"REMOVE_CART",payload:val})}>Remove to cart</button>
                </div>

                      })
               }
            </div>
    </div>
  )
}

export default App