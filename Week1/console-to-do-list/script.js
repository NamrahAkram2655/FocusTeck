let toDoList = [];

function displayList() {
  console.log("To-Do List:");
  toDoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

function addTask(task) {
  toDoList.push(task);
}

function removeTask(index) {
  if (index >= 0 && index < toDoList.length) {
    toDoList.splice(index, 1);
  } else {
    console.log("Invalid index.");
  }
}

addTask("Finish homework");
addTask("Buy groceries");
addTask("Clean the house");
displayList();

removeTask(1);
displayList();
