"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
const tarefa_1 = __importDefault(require("./tarefa"));
function Routes(fastify) {
    (0, tarefa_1.default)(fastify);
}
