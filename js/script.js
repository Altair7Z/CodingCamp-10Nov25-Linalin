
 let todos = [];

 function addTodo() {
    const todoinput = document.getElementById ("todo-input")
    const tododate = document.getElementById ("todo-date")

    console.log("input:", todoinput.value);
    console.log("Date:", tododate.value);

    // validasi dulu
    if (todoinput.value === '' || tododate.value === ''){
        alert("Pls isi dulu wok")
    } else {
        // add todo item to the list
        todos.push({text: todoinput.value, date: tododate.value});
        todoinput.value= '';
        tododate.value= '';

        rendertodos();
    }
 }

//  fungsi di render ke todo item
function rendertodos(){
    // ambil todo list container
    const todolist = document.getElementById("todo-list");

    // clear existing
    todolist.innerHTML = ''

    todos.forEach((todo,_) => {
        todolist.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr>
        </li>`;
    } )
}

function clearTodos() {
    todos = [];
    renderTodos();
}

/// Placeholder for future filter functionality
function filterTodos() { }