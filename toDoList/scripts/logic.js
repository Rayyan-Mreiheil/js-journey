

// function to read the input value, add it as a new <li> element to the list and then clear the input
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

// Function to remove li tag when an <li> is clicked
document.getElementById("task-list").addEventListener("click", function(e){
    e.target.remove();
})


// Function to mark li tag as Done when an <li> is clicked
// document.getElementById("task-list").addEventListener("click", function(e){
//     e.target.textContent += " ===>Done!";
// })