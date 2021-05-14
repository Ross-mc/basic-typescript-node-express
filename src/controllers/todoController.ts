import {RequestHandler} from 'express';
import {Todo} from "../models/todoModel"


const TODOS: Todo[] = []

export const createToDo: RequestHandler = (req, res, next) => {
  const pseudoRandomId: string = (Math.random() + Math.random()).toString();
  const text = req.body.text as string;
  const newTodo = new Todo(pseudoRandomId, text, false);
  TODOS.unshift(newTodo);
  res.status(201).json({message: "created to do", todo: newTodo})
}

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({todos: TODOS})
}

export const deleteHandler: RequestHandler = (req, res, next) => {
  const id = req.body.id;
  let found = false;
  for (let i = 0; i < TODOS.length; i++){
    if (TODOS[i].id === id){
      TODOS.splice(1, 1);
      found = true;
      break;
    }
  }
  if (found){
    res.json({message: "ToDo deleted"})
  } else {
    res.status(404).json({mesaage: "No To Do With that ID"})
  }
}


export const toggleDone: RequestHandler = (req, res, next) => {
  const id = req.body.id;
  let foundToDo = null;
  for (let i = 0; i < TODOS.length; i++){
    if (TODOS[i].id === id){
      TODOS[i].done = !TODOS[i].done;
      foundToDo = TODOS[i]
      break;
    }
  }
  if (foundToDo){
    res.json({message: "ToDo Updated", todo: foundToDo})
  } else {
    res.status(404).json({mesaage: "No To Do With that ID"})
  }
}