import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../.env` });

export const config = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: (process.env.port) ? (process.env.port) : 3000,
    JWT_SECRET: process.env.JWT_SECRET,
    BASE_URL: process.env.BASE_URL,
    MONGO_DB: {
        CONN_STRING: process.env.MONGO_DB_URI?.toString() || "mongodb+srv://Guichi:hola1234@cluster0.clby5.gcp.mongodb.net/apiBD?retryWrites=true&w=majority",
        LOG: process.env.MONGO_DB_LOG
    },
    CORS: {
        WHITELIST: process.env.CORS_WHITELIST
                    ? process.env.CORS_WHITELIST.split(',')
                    : []
    }
}