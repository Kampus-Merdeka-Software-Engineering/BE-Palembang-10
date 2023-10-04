import  express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/startSequelize.js";

import "./models/index.js"

dotenv.config()

const app = express();
const port = 3000;

app.use(cors());
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());

startSequelize(sequelize);

// server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 

//database
const databaseRun = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    app.get("/subscribe", (request, response) => {
      response.json({
          message: "Subscribed!",
      });
    });

    app.post("/subscribe", async (req, res) => {
      let data = req.body;
      let a = await Email.create ({
        email: data.email
      })
      res.json(a)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}

databaseRun();
