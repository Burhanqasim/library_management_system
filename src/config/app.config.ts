import { registerAs } from "@nestjs/config";

export default registerAs ("environment", ()=> ({
    environment: process.env.Env === "development" ? "development" : "production",
}))