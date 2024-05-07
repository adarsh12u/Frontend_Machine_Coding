const input = document.getElementById('input')
const button = document.getElementById('button')


 let array = [{
   name:"adarsh"
 }]

 array = [...array , {name:"adarg"}]
console.log(array)
let id = 0;
const fun  = (id) =>{
     
     const deleteelement = document.getElementsByClassName(id)[0].parentElement;
     
      deleteelement.remove();
     return
}
const add = ()=>{
     
      if(input.value == ""){
        alert("plese give input")
          return null;
      }
      else{

        const box = document.getElementById('box');
        
        const div = document.createElement('div');
        div.classList.add("n")
        const h = document.createElement('h1');
        const button = document.createElement('button');
        button.classList.add(id)
         button.innerHTML =  "Delete"
         button.style.height = "20px"
         button.setAttribute("onclick","fun("+button.className+")");
         h.innerHTML = input.value;   
          div.appendChild(h);
         div.appendChild(button)
          box.appendChild(div);

       id++;
         input.value = ""
      }


}
