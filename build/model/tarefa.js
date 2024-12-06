"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarefaModel = void 0;
const prisma_1 = require("../database/prisma");
class TarefaModel {
    tarefa = prisma_1.prisma.tarefas;
    async create(title, description) {
        return await this.tarefa.create({
            data: {
                title,
                description
            }
        });
    }
    async getAll() {
        return await this.tarefa.findMany();
    }
    async findById(id) {
        return await this.tarefa.findFirst({
            where: {
                id
            }
        });
    }
    async update({ id, title, description }) {
        const data = await this.findById(id);
        if (!data) {
            throw new Error("Este id é inválido");
        }
        return await this.tarefa.update({
            where: {
                id
            },
            data: {
                title,
                description
            }
        });
    }
    async delete(id) {
        const data = await this.findById(id);
        if (!data) {
            throw new Error("Este id é inválido");
        }
        const deletado = await this.tarefa.delete({
            where: {
                id
            }
        });
        return deletado ? true : false;
    }
}
exports.tarefaModel = new TarefaModel();
