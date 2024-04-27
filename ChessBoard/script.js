const initial_div = document.getElementsByClassName("initial_div")[0];
const divs = document.getElementsByClassName("div")[0]
for(let i=0;i<8;i++){
     let color = i%2 ==0 ?true:false;
     let divI =document.createElement("div");
     divI.setAttribute("class" , "row_div");
     
     for(let j=0;j<8;j++){
          let div =document.createElement("div");
          div.setAttribute("class",`${color ? `column_div ${i}-${j}` : `column_div color ${i}-${j}`}`)     
          div.setAttribute("data-index",`${i}-${j}`)     
         
          divI.appendChild(div);
         
        color = !color

        }


  initial_div.appendChild(divI);
}

initial_div.addEventListener("mouseover",(e)=>{
  
    let all = document.querySelectorAll(".column_div")
    for(let i=0;i<all.length;i++){
          all[i].classList.remove("blue")
    }

    let div = e.target.dataset.index.split("-").map((e)=>parseInt(e));
   let row = div[0]
   let col = div[1];
   
      let divk = document.getElementsByClassName(e.target.dataset.index)[0];
     
        
     divk.classList.add("blue");
   
     while(row > 0 && col>0){
        
           
        row--;
        col--;
        divk = document.getElementsByClassName(`${row}-${col}`)[0]
        divk.classList.add("blue");
    }
    
     row = div[0]
     col = div[1]
      
     while(row < 7 && col>0){ 
           
        row++;
        col--;
        divk= document.getElementsByClassName(`${row}-${col}`)[0]
        divk.classList.add("blue");
     }
     row = div[0]
     col = div[1]
     while(row < 7 && col<7){ 
           
        row++;
        col++;
        divk = document.getElementsByClassName(`${row}-${col}`)[0]
        divk.classList.add("blue");
     }
     row = div[0]
     col = div[1]
     while(row > 0 && col<7){ 
           
        row--;
        col++;
        divk = document.getElementsByClassName(`${row}-${col}`)[0]
        divk.classList.add("blue");
     }

})