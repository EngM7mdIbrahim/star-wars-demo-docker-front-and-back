import express from "express";
import { ROUTES } from "../../constants/routes";
import * as api from "../../api";
import { ServerError } from "../../errors/server-error";

const router = express.Router();

router.get(ROUTES.FILMS.ALL, async (req, res) => {
  try {
    const films = await api.getStarWarsFilms();
    res.status(200).send(films);
  } catch (err: any) {
    console.log("Error: ", err.message);
    throw new ServerError("Something went wrong while getting the films.");
  }
});

export { router as filmsRouter };
