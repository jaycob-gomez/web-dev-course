// Array to store todos as a list
let todos = [];

// Keep prompting the user to add todos until they say they are done
while (true) {
  let todo = prompt("Add a todo or type 'done' to finish");

  if (todo.toLowerCase() === "done") break;

  todos.push(todo);
}

console.log("Your Todo List");
todos.forEach((todo, index) => {
  console.log(`${index + 1}. ${todo}`);
});
