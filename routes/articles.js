import { Router } from "express";
import { getArticlesById, getAllArticles } from "../controllers/articles.js";

const articlesRouter = Router();

articlesRouter.get("/:id", getArticlesById);
articlesRouter.get("/", getAllArticles);

export default articlesRouter;