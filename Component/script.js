const  din = document.getElementsByClassName("initial_div")[0];
const close = document.getElementsByClassName("inside_button")[0];
const fun = () =>{
     
       din.innerHTML += `
       <div class="inside_div">
       <h3 style="margin-top: 50px;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis, impedit ea labore qui nobis libero quam temporibus vero eligendi, eaque blanditiis ex beatae dolores facilis ut adipisci. Provident ut mollitia nobis praesentium atque voluptatem, molestias id ducimus maxime facilis omnis rerum necessitatibus facere d
       </h3>
       <button onclick="closeF()" class="inside_button">close</button>
 </div>
       `


}
const closeF = ()=>{
    const close = document.getElementsByClassName("inside_button")[0];

      const parent  =  close.parentElement
       
      parent.remove();

}

