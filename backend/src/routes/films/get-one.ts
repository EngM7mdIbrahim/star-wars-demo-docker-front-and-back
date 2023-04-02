import express from "express";
import { ROUTES } from "../../constants/routes";
import * as api from "../../api";
import { ServerError } from "../../errors/server-error";

const router = express.Router();

router.get(ROUTES.FILMS.ONE, async (req, res) => {
  const { id } = req.params;
  try {
    const film = await api.getSignleFilm(id);
    res.status(200).send(film);
  } catch (err: any) {
    console.log("Error: ", err.message);
    throw new ServerError(
      "Something went wrong while getting the details of this film."
    );
  }
});

export { router as filmRouter };
