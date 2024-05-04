let container = document.getElementsByClassName("comment-container")[0];

const makereplyinputbox = () =>{
  let div = document.createElement("div");
  div.setAttribute("class","comment-details")   
  div.innerHTML+=`
  <input class="input" type="text">
   <button  class="send">send</button>`
  return div;
}
const makeCommentbox = (val) =>{
  let div = document.createElement("div");
  div.setAttribute("class","all-comment")   
  div.innerHTML+=`
  <div class="card">
  <h1>${val}</h1>
  <button class="addreply ">add reply</button>
</div>`
  return div;
}
 container.addEventListener("click",function(e){
          const reply = e.target.classList.contains("addreply") ;
          const send = e.target.classList.contains("send");
          let closestc = e.target.closest(".all-comment");
         console.log(closestc)
          if(reply){
                
              closestc.appendChild(makereplyinputbox());

          }
          if(send){
            let inputvalue = document.querySelector(".input");

             let valu = inputvalue.value;
              
           let div =   makeCommentbox(valu);
             let remove = e.target.closest(".comment-details")
             remove.remove();
          
          closestc.appendChild(div)
          }
 })