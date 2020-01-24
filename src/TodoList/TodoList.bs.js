'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var AppState$ReasonReactExamples = require("../AppState/AppState.bs.js");
var TodoItem$ReasonReactExamples = require("../TodoItem/TodoItem.bs.js");

function str(prim) {
  return prim;
}

var listStyle = {
  padding: "0"
};

function TodoList(Props) {
  var match = React.useReducer(AppState$ReasonReactExamples.reducer, {
        todos: /* [] */0
      });
  var dispatch = match[1];
  var match$1 = React.useState((function () {
          return "";
        }));
  var setValue = match$1[1];
  var value = match$1[0];
  var onChange = function ($$event) {
    return Curry._1(setValue, $$event.target.value);
  };
  var onKeyDown = function ($$event) {
    if ($$event.key === "Enter") {
      Curry._1(dispatch, /* AddTodo */Block.__(0, [value]));
      return Curry._1(setValue, (function (param) {
                    return "";
                  }));
    } else {
      return 0;
    }
  };
  return React.createElement(React.Fragment, undefined, React.createElement("input", {
                  value: value,
                  onKeyDown: onKeyDown,
                  onChange: onChange
                }), React.createElement("ul", {
                  style: listStyle
                }, $$Array.of_list(Belt_List.map(match[0].todos, (function (param) {
                            var id = param.id;
                            return React.createElement(TodoItem$ReasonReactExamples.make, {
                                        id: id,
                                        name: param.name,
                                        checked: param.checked,
                                        dispatch: dispatch,
                                        key: id
                                      });
                          })))));
}

var make = TodoList;

exports.str = str;
exports.listStyle = listStyle;
exports.make = make;
/* react Not a pure module */
