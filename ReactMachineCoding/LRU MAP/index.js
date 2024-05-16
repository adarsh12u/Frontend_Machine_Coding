




class LRU{
      
  
     
     constructor(max){
            this.max = max;
            this.map = new Map();

     }

     set(key,value)
     {
           if(this.map.has(key)){
               this.map.delete(key);
           }
           else if(this.map.size == this.max){
               this.map.delete(this.first());
           }

           this.map.set(key,value)
     }

     get(){
  
          console.log(this.map)
          
     }
     first(){
 
         return this.map.keys().next().value;
          
          
     }
 
     

}

const ler = new LRU(3);
ler.set("name","adarsh");
ler.set("localtion","tatti");
ler.set("names","adarshs");
ler.set("namesss","adarshsss");
ler.get();