import {prisma} from "../database/prisma";
import { dataForUpdate } from "../interface/tarefa";

class TarefaModel {
    protected tarefa =  prisma.tarefas
    async create(title: string, description: string){
        return await this.tarefa.create({
            data:{
                title,
                description
            }
        })
    }
    async getAll(){
        return await this.tarefa.findMany()
    }
    async findById(id: string){
        return await this.tarefa.findFirst({
            where:{
                id
            }
        })
    }
    async update({id,title, description}: dataForUpdate){
        const data = await this.findById(id)
        if (!data) {
            throw new Error("Este id é inválido")
        }
        return await this.tarefa.update({
            where:{
                id
            },
            data:{
                title,
                description
            }
        })
    }
    async delete(id: string): Promise <boolean>{
        const data = await this.findById(id)
        if (!data) {
            throw new Error("Este id é inválido")
        }
        const deletado = await this.tarefa.delete({
            where:{
                id
            }
        })
        return deletado? true: false
    }
}
export const tarefaModel = new TarefaModel()