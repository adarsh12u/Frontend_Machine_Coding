

 let button = document.getElementsByClassName("start_button")[0]


 button.addEventListener("click",()=>{
     
     console.log("come")
let inputH = document.getElementById("inputHu")
let inputM = document.getElementById("inputMin")
let inputS = document.getElementById("inputSec")
let inputv = parseInt(inputM.value)
   
   setInterval(()=>{
    var vals = parseInt(inputS.value)
    console.log(vals)  
          vals=vals-1;
          console.log(vals)
          inputS.value = vals
          if(vals ==0){
            inputv = inputv-1;
            inputM.value = inputv
            inputS.value = 59;    
          }    

   },1000)


 })