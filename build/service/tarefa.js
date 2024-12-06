"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarefaServices = void 0;
const tarefa_1 = require("../model/tarefa");
const tarefa_2 = require("../validations/tarefa");
class TarefaServices {
    async create(req, reply) {
        const { title, description } = tarefa_2.tarefaValidations.getDataForCreate.parse(req.body);
        const data = await tarefa_1.tarefaModel.create(title, description);
        return reply.send({ message: "dados criado com sucesso", data });
    }
    async get(req, reply) {
        const data = await tarefa_1.tarefaModel.getAll();
        return reply.send(data);
    }
    async update(req, reply) {
        const { id } = tarefa_2.tarefaValidations.getDataForDelete.parse(req.params);
        const { title, description } = tarefa_2.tarefaValidations.getDataForCreate.parse(req.body);
        const verifyIFIdExist = await tarefa_1.tarefaModel.findById(id);
        if (!verifyIFIdExist) {
            return reply.send({ error: "id inválido" });
        }
        const data = await tarefa_1.tarefaModel.update({ id, title, description });
        return reply.send({ message: "Dados actualizados com sucesso", data });
    }
    async delete(req, reply) {
        const { id } = tarefa_2.tarefaValidations.getDataForDelete.parse(req.params);
        const deletado = await tarefa_1.tarefaModel.delete(id);
        return reply.send({ message: "Dados deletado com sucesso" });
    }
}
exports.tarefaServices = new TarefaServices();
