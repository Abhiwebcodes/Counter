const text = document.querySelector(".value .num");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");




let n = 0;

// decrease btn function 

decrease.addEventListener("click", function(){

    n=n-1;
   
    text.innerHTML=n; 

})

// increase btn function 
increase.addEventListener("click", function(){
    n=n+1;
    text.innerHTML=n;
})

// reset 

reset.addEventListener("click", function(){
    n=0;
    text.innerHTML=n;
})
