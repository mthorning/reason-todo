let str = React.string;
let css = ReactDOMRe.Style.make;

let listStyle = css(~listStyleType="none", ~display="flex", ());

[@react.component]
let make = (~id, ~name, ~checked, ~dispatch) => {
  let strikethrough =
    checked ? css(~textDecoration="line-through", ()) : css();

  <li style=listStyle>
    <input
      checked
      type_="checkbox"
      onChange={_ => dispatch(AppState.ToggleCheck(id))}
    />
    <span style=strikethrough> name->str </span>
  </li>;
};