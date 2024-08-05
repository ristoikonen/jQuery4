const markTodoAsCompleted = (id) => {
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:8000/todos/${id}/completed',
        success: function(todos) {
            console.log(todos);
            setTodos(todos);
        },
    });
}

function getForecast() {
    fetch('http://localhost:8000/todos', {
        mode:  'no-cors' ,
        method: 'GET',
        headers: {
          //'Content-Type': 'application/json'
          'Content-Type': 'application/text'
        },
        // body: JSON.stringify({
        //   key1: 'value1',
        //   key2: 'value2'
        // })
      })
      //.then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Unable to get forecast.', error));
}

const createTodo = () => {
    console.log('Create POST todo');
    const newTodoText = $('#new-todo-input').prop('value');
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/todos',
        data: JSON.stringify({ text: newTodoText }),
        contentType: 'application/json',
        success: function(todos) {
            setPOSTTodos(todos);
        },
    });
}

const getTodo = async () => {
    console.log('a GET todo');
    const newTodoText = $('#new-todo-input').prop('value');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8000/todos',
        
        contentType: 'application/json',
        success: function(todos) {
            setGETTodos(todos);
        },
    });
}

const deleteTodo = (id) => {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:8000/todos/${id}',
        success: function(todos) {
            setTodos(todos);
        },
    });
}

const addTodo = (todo) => {
    console.log("Adding todo");
    console.log(todo);
    $('#todos-list').append(`
        <div class="todo">
            <h3>${todo.text}</h3>
            ${todo.isCompleted
                ? '<p>Complete!</p>'
                : ''}
            ${todo.isCompleted
                ? `<button onclick="deleteTodo('${todo.id}')">Delete</button>`
                : `<button onclick="markTodoAsCompleted('${todo.id}')">Mark As Completed</button>`}
        </div>
    `);
};

const setTodos = (todos) => {
    $('#todos-list').empty();
    $('#todos-list').append('<h2>Todos</h2>');
    //todos.forEach(todo => addTodo(todo));
}

const setPOSTTodos = (todos) => {
    $('#todos-list').empty();
    $('#todos-list').append('<h2>POST Todos</h2>' + '<h3>' + todos.text + '</h3>');
    //todos.forEach(todo => addTodo(todo));
}

const setGETTodos = (todos) => {
    $('#todos-list').empty();
    $('#todos-list').append('<h2>GEt Todos</h2>' + '<h3>' + todos.text + '</h3>');
    //todos.forEach(todo => addTodo(todo));
}


// $(() => {
//     $.ajax({
//         url: 'http://localhost:8000/todos',
//         success: function(todos) {
//             setTodos(todos);
//         },
//     });
// });
