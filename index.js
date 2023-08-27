const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-count");

let userchar = 0;

//to update the charecter on screen
function updateCounter() {
    userchar = charval.value.length;
    totalCount.innerText = userchar;
    remainingCount.innerText = 150 - userchar;
}

charval.addEventListener("keyup", ()=> updateCounter());


//to copy text

const copyText =() => { 
charval.select();
charval.setSelectionRange(0, 150) 
navigator.clipboard.writeText(charval.value)

}