const checkbox = document.querySelector("input");

const left = document.querySelector(".box1 h4")
const center = document.querySelector(".box2 h4")
const right = document.querySelector(".box3 h4")

checkbox.addEventListener("change",()=>{
    if(checkbox.checked === false){
        left.textContent="199.99";
        center.textContent="249.99";
        right.textContent="399.99";
    }else{
        left.textContent="19.99";
        center.textContent="24.99";
        right.textContent="39.99";
    }
})
