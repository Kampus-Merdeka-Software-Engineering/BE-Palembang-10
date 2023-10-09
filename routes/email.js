import { Router } from "express";
import { postCreateEmail } from "../controllers/email.js";

const emailRouter = Router();

emailRouter.post("/", postCreateEmail);

export default emailRouter;
