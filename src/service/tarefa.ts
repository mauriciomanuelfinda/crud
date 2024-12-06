import { tarefaModel } from "../model/tarefa";
import { tarefaValidations } from "../validations/tarefa";
import { FastifyReply, FastifyRequest } from 'fastify'

class TarefaServices {
    async create(req: FastifyRequest, reply: FastifyReply) {
        const { title, description } = tarefaValidations.getDataForCreate.parse(req.body)
        const data = await tarefaModel.create(title, description)
        return reply.send({ message: "dados criado com sucesso", data })
    }
    async get(req: FastifyRequest, reply: FastifyReply) {
        const data = await tarefaModel.getAll()
        return reply.send(data)
    }
    async update(req: FastifyRequest, reply: FastifyReply) {
        const { id } = tarefaValidations.getDataForDelete.parse(req.params)
        const { title, description } = tarefaValidations.getDataForCreate.parse(req.body)
        const verifyIFIdExist = await tarefaModel.findById(id)
        if (!verifyIFIdExist) {
            return reply.send({ error: "id inválido" })
        }
        const data = await tarefaModel.update({ id, title, description })
        return reply.send({ message: "Dados actuali", data })
    }
    async delete(req: FastifyRequest, reply: FastifyReply) {
        const { id } = tarefaValidations.getDataForDelete.parse(req.params)
        const deletado = await tarefaModel.delete(id)
        return reply.send({ message: "Dados deletado com sucesso" })

    }
}
export const tarefaServices = new TarefaServices()