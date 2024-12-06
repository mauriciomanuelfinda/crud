import fastify from "fastify"
import Routes from "./routes"

const app = fastify()


const start = async () => {
    try {
        const port = 3033
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