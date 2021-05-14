"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = require("body-parser");
var express_1 = __importDefault(require("express"));
var todos_1 = __importDefault(require("./routes/todos"));
var app = express_1.default();
app.use(body_parser_1.json());
app.use(todos_1.default);
app.use(function (err, req, res, next) {
    if (err) {
        res.status(500).json({ message: err.message });
    }
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log('Listening on port: ', PORT);
});
