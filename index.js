let todoList = [];
let addButtonElement = document.getElementById("add-button")
let deleteButtonElement = document.getElementById("delete-button")
let paragraphElem = document.createElement("new-task-container")
paragraphElem.innerText = "We are one"


function addItem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}
addButtonElement.addEventListener("click", function(){
    for(let i=0; i < todoList.length; i++){
        document.body.appendChild(todoList[i])
    }
    return todoList = todoList[i].push(paragraphElem)
})

