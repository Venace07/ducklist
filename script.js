const inputBox = document.getElementById("input-box");
const ข้อความ = document.getElementById("list-container");

function addtask() {
    if (inputBox.value === '') {
        alert("ต้องพิมพ์อะไรก่อนน!!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ข้อความ.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

ข้อความ.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", ข้อความ.innerHTML);
}
function showTask(){
    ข้อความ.innerHTML = localStorage.getItem("data");
}
showTask();