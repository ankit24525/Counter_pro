const value=document.querySelector("#Counter")


const increase=()=>{
    let v=parseInt(value.innerText);
    
    v=v+1;
    value.innerText=v;
};
const B1=document.querySelector("#C1")
B1.addEventListener("click",increase);

const decrease=()=>{
    let v=parseInt(value.innerText);
    v=v-1;
    value.innerText=v;
};
const B2=document.querySelector("#C2")
 
 B2.addEventListener("click",decrease);