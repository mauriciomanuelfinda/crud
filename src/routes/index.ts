import { FastifyInstance } from "fastify";
import TarefaRoutes from "./tarefa";

export default function Routes(fastify: FastifyInstance){
    TarefaRoutes(fastify)
}