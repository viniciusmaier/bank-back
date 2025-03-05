import "reflect-metadata";
import "./config/container/index";
import express, { Express } from "express";
import { logger } from "./utils/logger";
import { config } from "dotenv";
import "reflect-metadata";
import api from "./route/api";
config();

const app: Express = express();
app.use(express.json());
app.use("/api", api);

app.listen(process.env.SERVER_PORT, () => {
  logger.info(`Application is running in port ${process.env.SERVER_PORT}`);
});
