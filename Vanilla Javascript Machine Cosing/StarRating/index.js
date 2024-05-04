 let l = document.getElementsByClassName('h');

 const fun = (number)=>{
    let s = document.getElementsByClassName('h')[0]
   s.innerHTML = 'total count :';
    let c = document.getElementsByClassName('s');
console.log(c[0])

    for(var i = 0;i<c.length;i++){
     
        
        c[i].style.color = "black"
     
     }


    


      for(let i = 1;i<=number;i++){
       
         let value = document.getElementById(`${i}`);
         value.style.color = "yellow"
      }

        s.innerHTML+=number
 }