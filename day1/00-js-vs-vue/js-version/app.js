const todoTextInput = document.querySelector("#todoTextInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

addBtn.addEventListener("click", function () {
  const listElement = document.createElement("li");
  listElement.textContent = todoTextInput.value;
  todoList.appendChild(listElement);
  todoTextInput.value = "";
});
