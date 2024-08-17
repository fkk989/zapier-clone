import { Router } from "express";
import { hooksPostHandler } from "../handlers";

export const hooksRouter = Router();

hooksRouter.post("/catch/:userId/:zapId", hooksPostHandler);
