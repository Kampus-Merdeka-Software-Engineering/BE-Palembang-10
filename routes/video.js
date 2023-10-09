import { Router } from "express";
import { getVideoById, getAllVideos } from "../controllers/video.js";

const videoRouter = Router();

videoRouter.get("/:id", getVideoById);
videoRouter.get("/", getAllVideos);

export default videoRouter;