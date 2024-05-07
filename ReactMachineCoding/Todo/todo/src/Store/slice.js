import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
      item:[],
      data:""
};
const slice = createSlice({
    name:"todo",
   initialState:initialstate,
   reducers:{
         addTodo: (state , action)=>{
                 
            const id =Math.random()*1000;

            const data = {
               id:id,
               todo:action.payload,
            }
       state.item.push(data)
        //    updatelocalstorage(JSON.stringify(state.item))
              
         },
         deleteTodo:(state , action)=>{
         
        state.item = state.item.filter((val)=>val.id !==  action.payload)
            // updatelocalstorage(JSON.stringify(state.item))
         },
         EditTodo:(state , action)=>{
            const obj = state.item.find((val)=>val.id === action.payload)
           
            state.item = state.item.filter((val)=>val.id !==  obj.id)
           
            // action.payload.setTodo(obj.todo);
             
        }
   }
})


export const {addTodo , deleteTodo , EditTodo}  = slice.actions;
export default  slice.reducer;
