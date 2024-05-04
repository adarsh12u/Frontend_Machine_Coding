let data = [];
let div = document.getElementById("d");
document.addEventListener("DOMContentLoaded",function(){
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((res)=>{
       return res.json();
    }).then((res)=>{
  console.log(res)
  data = res
for(let i=0;i<data.length;i++){

    div.innerHTML +=     `
    <div class="card">
      <div class="imaged">
       <img class="img" src=${data[i].image}>
       </div>
  <div class="divh">
  
  <div class="fir">
  <h3 class="h2">${data[i].name} </h3>
  <h3 class="h3">${data[i].current_price}</h3>
  </div>
  <div  class="sec">
  
  <h3 class="h4">${data[i].price_change_24h}</h3>
  <h3 class="h5">${data[i].atl_change_percentage}</h3>
  </div>
  </div>
  </div>
       
      `
         }
    })
    
      
})
