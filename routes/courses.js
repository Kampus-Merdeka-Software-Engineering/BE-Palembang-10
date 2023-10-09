import { Router } from "express";
import { getCoursesById, getAllCourses } from "../controllers/courses.js";

const coursesRouter = Router();

coursesRouter.get('/', getAllCourses);
coursesRouter.get("/:id", getCoursesById);

export default coursesRouter;