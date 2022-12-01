
        // color btn
         var elements = document.getElementsByClassName("colbtn");
         for(var c = 0; c < elements.length; c++)
         {
             elements[c].onclick = function(){
                
                
                
                var el = elements[0];
                 while(el)
                 {
                     if(el.tagName === "DIV"){
                       
                         el.classList.remove("colorjsbtn");
                        
                    }
                    
                     el = el.nextSibling;
                 }
                
               this.classList.add("colorjsbtn");  
             };
         }
               
        // size btn
     var elements = document.getElementsByClassName("sizebtn");
     for(var i = 0; i < elements.length; i++)
     {
         elements[i].onclick = function(){
            
            
            
             var el = elements[0];
             while(el)
             {
                 if(el.tagName === "DIV"){
                   
                     el.classList.remove("sixejsbtn");
                    
                 }
                
                 el = el.nextSibling;
             }
            
           this.classList.add("sixejsbtn");  
         };
     }


        const plus = document.querySelector(".plus"),
        minus = document.querySelector(".minus"),
       num= document.querySelector(".num");

       let a = 1;

       plus.addEventListener("click", ()=>{
        a++;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
        console.log(a);
       })

       minus.addEventListener("click", ()=>{
       if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
       }
       });