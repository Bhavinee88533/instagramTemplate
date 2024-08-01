let buttons=document.querySelectorAll("button");
let container=document.querySelector(".container")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        container.innerHTML=`<h1> FUCK OFF </h1>`
    })
})