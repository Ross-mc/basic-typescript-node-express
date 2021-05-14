"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleDone = exports.deleteHandler = exports.getTodos = exports.createToDo = void 0;
var todoModel_1 = require("../models/todoModel");
var TODOS = [];
var createToDo = function (req, res, next) {
    var pseudoRandomId = (Math.random() + Math.random()).toString();
    var text = req.body.text;
    var newTodo = new todoModel_1.Todo(pseudoRandomId, text, false);
    TODOS.unshift(newTodo);
    res.status(201).json({ message: "created to do", todo: newTodo });
};
exports.createToDo = createToDo;
var getTodos = function (req, res, next) {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
var deleteHandler = function (req, res, next) {
    var id = req.body.id;
    var found = false;
    for (var i = 0; i < TODOS.length; i++) {
        if (TODOS[i].id === id) {
            TODOS.splice(1, 1);
            found = true;
            break;
        }
    }
    if (found) {
        res.json({ message: "ToDo deleted" });
    }
    else {
        res.status(404).json({ mesaage: "No To Do With that ID" });
    }
};
exports.deleteHandler = deleteHandler;
var toggleDone = function (req, res, next) {
    var id = req.body.id;
    var foundToDo = null;
    for (var i = 0; i < TODOS.length; i++) {
        if (TODOS[i].id === id) {
            TODOS[i].done = !TODOS[i].done;
            foundToDo = TODOS[i];
            break;
        }
    }
    if (foundToDo) {
        res.json({ message: "ToDo Updated", todo: foundToDo });
    }
    else {
        res.status(404).json({ mesaage: "No To Do With that ID" });
    }
};
exports.toggleDone = toggleDone;
