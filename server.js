import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/startSequelize.js";
import cors from "cors";
import "./models/index.js"
import emailRouter from "./routes/email.js";
import coursesRouter from "./routes/courses.js";
import videoRouter from "./routes/video.js";
import articlesRouter from "./routes/articles.js";

dotenv.config();

const app = express();
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());
app.use(bodyParser.json()); 

app.use(express.static("public"))

app.use("/api/email", emailRouter)
app.use("/api/courses", coursesRouter)
app.use("/api/video", videoRouter)
app.use("/api/articles", articlesRouter)

startSequelize(sequelize)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
});
