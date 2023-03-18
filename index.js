let todoList = [];
let addButtonElement = document.getElementById("add-button")
let deleteButtonElement = document.getElementById("delete-button")
let paragraphElem = document.createElement("new-task-container")
paragraphElem.innerText = "We are one"


function addItem() {
    let newItem = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    newItem.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("todoList").appendChild(newItem);
    }
    document.getElementById("myInput").value = "";
  
}
addButtonElement.addEventListener("click", addItem)
