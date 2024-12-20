import{ FastifyInstance } from "fastify";
import { tarefaServices } from "../service/tarefa";

export default function TarefaRoutes(fastify: FastifyInstance){
    
    fastify.get('/tarefa', tarefaServices.get)
    fastify.post('/tarefa', tarefaServices.create)
    fastify.put('/tarefa/:id', tarefaServices.update)
    fastify.delete('/tarefa/:id', tarefaServices.delete)
}