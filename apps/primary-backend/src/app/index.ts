import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

export const app = express();

app.use(cors(), bodyParser.json());

// Routers
app.use("/hooks");
