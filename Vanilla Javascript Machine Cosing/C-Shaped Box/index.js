let box = document.getElementsByClassName('main')[0];

let boxs = document.querySelectorAll('.div');

let queue= [];

box.addEventListener("click",(e)=>{
        let index = e.target.dataset.index;
        console.log(queue)

        
     if(index != undefined){
          queue.push(index);
          boxs[index].classList.add("color");
     }
     console.log(queue)
     if( queue.length == 7){
          let cnt = 0;
          while(queue.length >0){
            cnt++;
             let index = queue.pop();
             console.log(queue)
             setInterval(()=>{
                  boxs[index].classList.remove("color")
             },cnt*1000)
             clearInterval(()=>{
                return;
             });
             
          }
           
     }
    //  queue = []
    })