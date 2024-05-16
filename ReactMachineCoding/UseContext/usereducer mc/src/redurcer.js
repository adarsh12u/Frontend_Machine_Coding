import React from 'react'

const redurcer = (state , action) => {
    
    switch(action.type){
          case "ADD_DATA":
              return {...state,products:action.payload}

          case "ADD_CART":
           console.log(action.payload) 
          return {...state,cart:[...state.cart ,{...action.payload}]}   
          
          case "REMOVE_CART":
            
             return {...state,cart:state.cart.filter((val)=>val.id!==action.payload)}

          default:
            break;

    }
      
}

export default redurcer