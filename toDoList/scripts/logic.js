


function AddToList(){

    const task = document.getElementById("task-input").value;
    
    const createLI = document.createElement("LI");
    const addTask = document.createTextNode(task);

    createLI.appendChild(addTask);

    document.getElementById("task-list").appendChild(createLI);

    document.getElementById("task-input").value = ""

}

const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click",AddToList)