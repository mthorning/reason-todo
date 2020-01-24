let str = React.string;

let listStyle = ReactDOMRe.Style.make(~padding="0", ());

[@react.component]
let make = _ => {
  let (state, dispatch) = React.useReducer(AppState.reducer, {todos: []});

  let (value, setValue) = React.useState(_ => "");
  let onChange = event => {
    let newValue = event->ReactEvent.Form.target##value;
    setValue(newValue);
  };

  let onKeyDown = event =>
    if (event->ReactEvent.Keyboard.key === "Enter") {
      dispatch(AddTodo(value));
      setValue(_ => "");
    };

  <>
    <input value onChange onKeyDown />
    <ul style=listStyle>
      {state.todos
       ->Belt.List.map(({id, name, checked}) =>
           <TodoItem key=id id name checked dispatch />
         )
       ->Array.of_list
       ->React.array}
    </ul>
  </>;
};