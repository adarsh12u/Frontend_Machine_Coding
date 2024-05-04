const data = [
      "adarsh","akash","akhil","bhushan", "Apple",
      "Banana",
      "Orange",
      "Grapes",
      "Pineapple",
      "Watermelon",
      "Mango",
      "Strawberry",
      "Kiwi","deepesh","koffi","harsh","anda","Ziraffe","Zebra","kolkatta","kutta","kerela","penetrate","bananan","cates","dungas","dog","elephant",""
]


let input = document.getElementsByClassName("input")[0];
let div = document.getElementsByClassName("content")[0];
function  handlechange(e){ 
      // removing all childs 
      while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
      const value = e.target.value
      

      const datas = data.filter((data)=>{
              return data.indexOf(value)!=-1;
      })
console.log(datas)
      datas.map((val)=>{
            console.log("h")
            let divs = document.createElement("div");
            divs.setAttribute("class","cont")
            divs.innerHTML = val;
            div.appendChild(divs)
      })


}