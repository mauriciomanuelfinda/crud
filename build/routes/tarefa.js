"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TarefaRoutes;
const tarefa_1 = require("../service/tarefa");
function TarefaRoutes(fastify) {
    fastify.get('/tarefa', tarefa_1.tarefaServices.get);
    fastify.post('/tarefa', tarefa_1.tarefaServices.create);
    fastify.put('/tarefa/:id', tarefa_1.tarefaServices.update);
    fastify.delete('/tarefa/:id', tarefa_1.tarefaServices.delete);
}
