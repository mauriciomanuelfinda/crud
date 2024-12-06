import z from 'zod'

class TarefaValidations {
    getDataForCreate = z.object({
        title: z.string(),
        description: z.string()
    })
    getDataForDelete = z.object({
        id: z.string().uuid()
    })
}
export const tarefaValidations = new TarefaValidations()