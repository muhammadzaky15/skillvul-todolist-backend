"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const todolist_route_1 = __importDefault(require("./routers/todolist.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.static('uploads'));
app.use('/v1/todolist', todolist_route_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server running');
});
app.listen(3000, () => {
    console.log("server berjalan di port ", 3000);
});
