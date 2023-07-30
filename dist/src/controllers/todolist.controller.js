"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getTodolist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todolist = yield prisma.todolist.findMany();
        res.status(200).json({ data: todolist });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const getTodolistById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todolist = yield prisma.todolist.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json(todolist);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const createTodolist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, completed } = req.body;
        const todolist = yield prisma.todolist.create({
            data: {
                title,
                completed,
            },
        });
        res.status(201).json(todolist);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const editTodolist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const todolist = yield prisma.todolist.update({
            where: {
                id: parseInt(id),
            },
            data: {
                title,
                completed,
            },
        });
        res.status(200).json(todolist);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
const deleteTodolist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todolist = yield prisma.todolist.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json(todolist);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.default = { getTodolist, getTodolistById, createTodolist, editTodolist, deleteTodolist };
