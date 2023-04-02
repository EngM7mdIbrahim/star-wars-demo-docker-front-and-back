import { Express } from "express";
import { filmsRouter } from "./get-all";
import { filmRouter } from "./get-one";

export default function filmsBinder(app: Express) {
  app.use(filmsRouter)
  app.use(filmRouter)
}