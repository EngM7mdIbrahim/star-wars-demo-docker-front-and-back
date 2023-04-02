import { Express } from "express";
import { shipRouter } from "./get-one";

export default function shipsBinder(app: Express) {
  app.use(shipRouter)
}