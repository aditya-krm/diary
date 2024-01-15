let expText = document.querySelector("#expn");
let expAmt = document.querySelector("#amnt");
let addBtn = document.querySelector(".add");
let expContainer = document.querySelector("#expense-container");

function expTextError(){
    console.log("error in textInput");
    expText.classList.toggle("error");
    setTimeout(()=>{
        expText.classList.remove("error");
    },350);
}
function expNumError(){
    console.log("error in numInput");
    expAmt.classList.toggle("numInputAreaError");
    setTimeout(() => {
        expAmt.classList.remove("numInputAreaError");
    }, 350);
}
addBtn.addEventListener("click",()=>{
    if(expText.value === '' && expAmt.value === ''){
        expTextError();
        expNumError();
    }else if(expText.value === ''){
        expTextError();
    }else if(expAmt.value === ''){
        expNumError();
    }else{
        let li = document.createElement("li");
        li.innerHTML = expText.value;
        expContainer.appendChild(li);

        let spanAmt = document.createElement("span");
        spanAmt.innerHTML = expAmt.value;
        spanAmt.setAttribute("id","amnt");
        li.appendChild(spanAmt);

        let spanCross = document.createElement("span");
        spanCross.innerHTML  = "&#10005;";
        spanCross.setAttribute("id","cross");
        li.appendChild(spanCross);
        saveData();
    }
    expText.value = '';
    expAmt.value = '';
});

expContainer.addEventListener("click",(e)=>{
    if(e.target.id == "cross"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("expenseData",expContainer.innerHTML);
};

function expenseDisplay(){
    expContainer.innerHTML = localStorage.getItem("expenseData");
};

expenseDisplay();