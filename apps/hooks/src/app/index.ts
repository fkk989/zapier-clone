import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { hooksRouter } from "./routes";

export const app = express();

app.use(cors(), bodyParser.json());

// Routers
app.use("/hooks", hooksRouter);
