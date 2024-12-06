"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, fastify_1.default)();
const start = async () => {
    try {
        const host = process.env.HOST || "0.0.0.0";
        const port = Number(process.env.PORT);
        await app.register(cors_1.default, {
            origin: '*',
            credentials: true
        });
        //Rotas
        app.register(routes_1.default);
        await app.listen({ port, host }).then(() => {
            console.log(`Server is running on ${port}`);
        });
    }
    catch (err) {
        console.log(err);
        app.log.error(err);
        process.exit(1);
    }
};
start();
