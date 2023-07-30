"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todolist_controller_1 = __importDefault(require("../controllers/todolist.controller"));
const router = express_1.default.Router();
router.get("/", todolist_controller_1.default.getTodolist);
router.post("/", todolist_controller_1.default.createTodolist);
router.get("/:id", todolist_controller_1.default.getTodolistById);
router.put("/:id", todolist_controller_1.default.editTodolist);
router.delete("/:id", todolist_controller_1.default.deleteTodolist);
exports.default = router;
