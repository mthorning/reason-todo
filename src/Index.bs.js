'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var TodoList$ReasonReactExamples = require("./TodoList/TodoList.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(TodoList$ReasonReactExamples.make, { }), "root");

/*  Not a pure module */
