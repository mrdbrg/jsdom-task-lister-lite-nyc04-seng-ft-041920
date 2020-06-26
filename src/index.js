const ul = document.getElementById("tasks")
ul.style.listStyleType = "none";
const form = document.getElementById("create-task-form")
const list = document.getElementById("list")

// =================================================================
//                            EVENT LISTENERS
// =================================================================

form.addEventListener("click", (event) => {
  event.preventDefault()

  // .MATCH() - IF THE ELEMENT CLICKED MATCHES THE CONDITION
  if (event.target.matches('input[type="submit"]')) {
    const input = document.getElementById("new-task-description")

    if (input.value === "") {
      alert("You must enter a task")
    } 
    else {
      createTask(input)    
    }
  }
})

list.addEventListener("click", (event) => {
  if (event.target.matches('button[type="btn-delete"]')) {
    // .CLOSEST - FINDS THE CLOSEST ELEMENT WITH THE GIVEN ATTRIBUTE
    task = event.target.closest('.btn-delete')
    task.remove()
  }
})

// =================================================================
//                            FUNCTIONS
// =================================================================

function createTask(input) {
  const li = document.createElement('li')
  const btnDelete = document.createElement('button')

  btnDelete.innerText = "Delete"
  btnDelete.setAttribute("type", "btn-delete")
  btnDelete.style.fontSize = "15px"
  btnDelete.style.margin = "5px"
  li.innerText = input.value
  li.setAttribute("class", "btn-delete")
  li.append(btnDelete)
  ul.append(li)
}