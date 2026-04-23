import { registerAs } from "@nestjs/config";

export default registerAs ("database", ()=> ({
    autoLoadEntities: process.env.DATABASE_AUTOLOAD === "true",
    synchronize: process.env.DATABASE_SYNC === "true",
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
}))