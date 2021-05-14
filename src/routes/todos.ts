import {Router} from "express";
import {createToDo, getTodos, deleteHandler, toggleDone} from "../controllers/todoController"

const router = Router();

router.post("/todos/", createToDo);

router.get("/todos/", getTodos);

router.delete("/todos/", deleteHandler)

router.put("/todos/", toggleDone)


export default router;