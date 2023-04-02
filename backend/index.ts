// Basic imports
import express from "express";
import "express-async-errors";
import cors from "cors";
import dotEnv from "dotenv";
//MiddleWares
import errorHandler from "./src/middlewares/error-handler";
//Route Binders
//Utils
import filmsBinder from "./src/routes/films";
import shipsBinder from "./src/routes/ships";

dotEnv.config();
const app = express();
app.set("trust proxy", 1);

//Default Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// @ts-ignore
app.use(cors());

//Bind Routes
//TODO: ADD YOUR ROUTE BINDERS HERE!
filmsBinder(app);
shipsBinder(app);

//Middlewares
// TODO: ADD YOUR MIDDLEWARES HERE!
app.use(errorHandler);

app.listen(process.env.PORT || 3001, async () => {
  console.log("Listenning in port " + (process.env.PORT || 3001) + " ...");
});
