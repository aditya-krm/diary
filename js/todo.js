let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#todo-container");
let addBtn = document.querySelector("#addbtn");
// let errorText = document.querySelector(".normal");

function showError(){
    console.log("Error");
    inputBox.classList.toggle("error")
    // errorText.classList.remove("normal");
    // errorText.classList.add("errortext");
    setTimeout(() => {
        inputBox.classList.remove("error");
        // errorText.classList.add("normal");
        // errorText.classList.remove("errortext");
    }, 350);
}
addBtn.addEventListener("click",()=>{
    if(inputBox.value === ''){
        showError();
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML  = "&#10005;";
        li.appendChild(span);
    }
    inputBox.value = "" ;
    saveData();
})

listContainer.addEventListener("click",(e)=>{
    if(e.target.nodeName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("todoData",listContainer.innerHTML);
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem("todoData");
}
displayData();