let api =  "https://fakestoreapi.com/products";


document.addEventListener("DOMContentLoaded",()=>{
     
    let data = fetch(api).then((res)=>{
         return  res.json();
    }).then((res)=>{
          console.log(res)
          res.map((data)=>{
                    
                  let div = document.createElement('div');
      div.setAttribute("class","card");
      let coloredRatingStar = parseInt(data.rating.rate);
      let notColoredRatingStar = 5 - coloredRatingStar;
      let allStarDiv = document.createElement("div");
      
      let allStarDivs = document.createElement("div");
       allStarDiv.appendChild(allStarDivs);
      allStarDiv.setAttribute("id", "star");
      allStarDiv.setAttribute("class", "star");

      for (let i = 0; i < coloredRatingStar; i++) {
        allStarDivs.innerHTML += `<span class="yellow">&#9733;</span>`;
      }

      for (let i = 0; i < notColoredRatingStar; i++) {
        allStarDivs.innerHTML += `<span class="star__notfilled">&#9734;</span>`;
      }
        
        div.innerHTML+= `
    
                        <div class="imagediv">
                                <img class="img" src=${data.image} alt="">
                        </div>
                   <div class="centerdiv">
                       <p>
                       ${data.title}  </p>
                       <h4>jwellery</h4>
                       ${allStarDiv.innerHTML}
                      <h4>Rating : ${data.rating.count}</h4>
                   </div>
                   <div class="buttondiv">
                       <button>Buy now</button>
                   
</div>`


   const pri = document.getElementsByClassName("main_Div")[0]
   pri.appendChild(div)        
})


    }); 
 

})