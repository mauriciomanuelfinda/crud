import fastify from "fastify"
import Routes from "./routes"
import cors from '@fastify/cors'
import { config } from "dotenv"

config()
const app = fastify()


const start = async () => {
    try {
        
        const port = Number(process.env.PORT)
        await app.register(cors, {
            origin: '*',
            credentials: true
        });
        //Rotas
        app.register(Routes)
        await app.listen({ port }).then(() => {
            console.log(`Server is running on ${port}`)
        })
    } catch (err) {
        console.log(err);
        app.log.error(err);
        process.exit(1);
    }
}
start()