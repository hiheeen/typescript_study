interface ToDo {
    text : string;
    completed : boolean;
}
const toDos: ToDo[] = readTodo();
const btn = document.getElementById("btn")!;
const input = document.getElementById("todoInput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todoList")! as HTMLUListElement;
// HTMLElement 에 append 쓸 수 있음. list.append 에 에러가 나는 이유는 null이 될 수 있기 때문이다. non-null 단언
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));

}
const createTodo = (todo : ToDo) => {
    const newDiv = document.createElement('span');
    newDiv.append(todo.text);
    const newLi = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", function () {
        todo.completed = checkBox.checked;
        saveTodos();
        
    })
    newLi.append(newDiv);
    newLi.append(checkBox);
    list.append(newLi);
}
toDos.forEach(createTodo); // createTodo 처음 실행하는 부분. 
// 로컬스토리지에서 배열을 읽어와서 toDos 배열에 저장하는 readTodo()가 먼저 실행되고,
// toDos.forEach를 사용하여 하나의 객체당 createTodo 함수를 실행
// 그렇게 목록이 만들어질 때 checkbox의 체크여부를 todo.completed로 하기 때문에 새로고침 했을 때 
// 체크여부가 표시되는 것.
function readTodo() : ToDo[] {
    const todoJSON =  localStorage.getItem("todos");
 if (todoJSON === null) return [];
 return JSON.parse(todoJSON);
}
const handleSubmit = (e : SubmitEvent) => {
    e.preventDefault();
} 
form.addEventListener("submit", handleSubmit);
btn.addEventListener("click", function () {
    const newTodo :ToDo = {
        text : input.value,
        completed : false,
    } 
    toDos.push(newTodo);
    createTodo(newTodo);
    saveTodos();
    input.value = '';
})
