let click = document.getElementsByClassName("click")[0];
let original =document.getElementsByClassName("original")[0];
click.addEventListener("click",(e)=>{
       
    let  margin = e.target.dataset.index;
    let div = document.createElement('div');
    div.style.margin = `${margin}px`;
    let input = document.createElement('input');
    input.classList.add("inputvalue");
    let button = document.createElement('button');
    button.innerHTML = "send"
    button.classList.add("send");
    button.setAttribute("onclick",`handleclick(${margin+20})`)
    
    button.setAttribute("data-index",`${margin+20}`)
    div.appendChild(input);
    div.appendChild(button);

    original.appendChild(div);

})

const handleclick = () =>{
   
    let input = document.getElementsByClassName("inputvalue")[0]
    let div1 = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.innerHTML = `${input.value}`
    let buttons = document.createElement('button');
    buttons.innerHTML = "Add reply"
    buttons.classList.add("click");
    buttons.setAttribute("onclick","handleclick()")
    
    buttons.setAttribute("data-index",`${margin+20}`)
    
    

    
} 