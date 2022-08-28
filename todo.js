const todoForm = document.querySelector("#todoform");
const todoInput = document.querySelector("#todoform input");
const todoList = document.querySelector("#todolist");

const todo = [];

// delete 함수
function deleteTodo (event) {
    const li = event.target.parentElement;
    li.remove();
}

// String 형식으로 save하는 함수
function saveTodo () {
    localStorage.setItem("todo", JSON.stringify(todo));
}

// paint함수, 텍스트 입력받음
// X가 클릭되었을 경우 제거하라고 보냄
function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

// submit 받으면 value 값을 입력창에서 지움
// localStorage에 저장하라고 보냄
// paint로 표현하라고 보냄
function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todo.push(newTodo);
    paintTodo(newTodo);
    saveTodo();
}

todoForm.addEventListener("submit", todoSubmit);