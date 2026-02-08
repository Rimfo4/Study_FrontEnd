const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input:first-child');
const toDoList = document.querySelector('#todo-list');
const TODOS_KEY = 'todos';


let toDoArr = [];

function saveTodos(){
    //JSON을 이용하여 배열을 String으로 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArr));
}

function toDoDelete(event){
    const parentList = event.target.parentElement;
    parentList.remove();
    
    //filter()는 배열의 각 item을 특정 조건으로 제외하고 남은 item끼리 배열을 만듬
    toDoArr = toDoArr.filter((toDo) => toDo.id != parseInt(parentList.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '❌'
    
    li.appendChild(span);
    li.appendChild(button)

    button.addEventListener('click', toDoDelete);
    toDoList.append(li);
}

function onTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    } 

    toDoArr.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener('submit', onTodoSubmit);



// 이전에 입력한 todo를 가져오기
const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos != null){
    // JSON을 이용하여 문자열을 배열로 다시 전환
    const parsedToDos = JSON.parse(savedTodos);
    toDoArr = parsedToDos;

    //forEach()는 배열 타입일 때 각각의 item을 어떻게 할 것인지 처리하는 함수이다.
    parsedToDos.forEach(paintTodo);
    
    // function sayItem(item){
    //    console.log('이 아이템은 '+item);
    // }    
}