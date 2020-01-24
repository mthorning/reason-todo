type todo = {
  id: string,
  name: string,
  checked: bool,
};

type state = {todos: list(todo)};
type action =
  | AddTodo(string)
  | ToggleCheck(string);

let todoCount = ref(0);
let getNewTodo = name => {
  todoCount := todoCount^ + 1;
  {id: string_of_int(todoCount^), name, checked: false};
};

let reducer = (state, action) => {
  switch (action) {
  | AddTodo(name) => {todos: [getNewTodo(name), ...state.todos]}
  | ToggleCheck(id) => {
      todos:
        state.todos
        ->Belt.List.map(todo =>
            todo.id === id ? {...todo, checked: !todo.checked} : todo
          ),
    }
  };
};