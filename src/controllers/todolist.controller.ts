import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import exp from "constants";

const prisma = new PrismaClient();

const getTodolist = async (req: Request, res: Response) => {
  try {
    const todolist = await prisma.todolist.findMany();
    res.status(200).json({ data: todolist });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getTodolistById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todolist = await prisma.todolist.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json(todolist);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

const createTodolist = async (req: Request, res: Response) => {
  try {
    const { title, completed } = req.body;
    const todolist = await prisma.todolist.create({
      data: {
        title,
        completed,
      },
    });
    res.status(201).json(todolist);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const editTodolist = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const todolist = await prisma.todolist.update({
            where: {
                id: parseInt(id),
            },
            data: {
                title,
                completed,
            },
        });
        res.status(200).json(todolist);
    } catch (error: any) {
        res.status(400).json({ error });
    }
};

const deleteTodolist = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todolist = await prisma.todolist.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json(todolist);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export default{ getTodolist, getTodolistById, createTodolist, editTodolist, deleteTodolist }