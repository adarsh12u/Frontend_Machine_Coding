let h1 = document.getElementsByClassName("h1")[0];
let add = document.getElementsByClassName("add")[0];
let remove = document.getElementsByClassName("remove")[0];


let select = document.getElementById("select");

var value = 1;

const handleselect = ()=>{
     
     value = parseInt(select.value); 
      
}

add.addEventListener("click",()=>{
      
        let number =  parseInt(h1.innerHTML)
            h1.innerHTML = number+value

        

})


remove.addEventListener("click",()=>{
    let number =  parseInt(h1.innerHTML)
    if(number >0){
        
        h1.innerHTML = number-value
    }

 
})