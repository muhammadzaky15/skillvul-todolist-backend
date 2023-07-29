import express from "express";
import todolistController from "../controllers/todolist.controller";
const router = express.Router();

router.get("/", todolistController.getTodolist);
router.post("/", todolistController.createTodolist);
router.get("/:id", todolistController.getTodolistById);
router.put("/:id", todolistController.editTodolist);
router.delete("/:id", todolistController.deleteTodolist);

export default router;