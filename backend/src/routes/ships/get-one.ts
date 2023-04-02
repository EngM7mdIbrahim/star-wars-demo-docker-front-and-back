import express from "express";
import { ROUTES } from "../../constants/routes";
import * as api from '../../api'
import { ServerError } from "../../errors/server-error";

const router = express.Router();

router.get(ROUTES.SHIPS.ONE, async (req, res) => {
  const {id} = req.params;
  try{
    const ship = await api.getStarship(id);
    res.status(200).send(ship);
  }catch(err: any){
    console.log('Error: ',err.message);
    throw new ServerError('Something went wrong while getting the details of this ship.')
  } 
  
});

export { router as shipRouter };