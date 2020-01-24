'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

var todoCount = {
  contents: 0
};

function getNewTodo(name) {
  todoCount.contents = todoCount.contents + 1 | 0;
  return {
          id: String(todoCount.contents),
          name: name,
          checked: false
        };
}

function reducer(state, action) {
  if (action.tag) {
    var id = action[0];
    return {
            todos: Belt_List.map(state.todos, (function (todo) {
                    var match = todo.id === id;
                    if (match) {
                      return {
                              id: todo.id,
                              name: todo.name,
                              checked: !todo.checked
                            };
                    } else {
                      return todo;
                    }
                  }))
          };
  } else {
    return {
            todos: /* :: */[
              getNewTodo(action[0]),
              state.todos
            ]
          };
  }
}

exports.todoCount = todoCount;
exports.getNewTodo = getNewTodo;
exports.reducer = reducer;
/* No side effect */
