import axios from 'axios';
import { StarshipData } from 'types/StarshipData';

export const getStarship = async (id: string): Promise<StarshipData> => {
  return (await axios.get(`http://localhost:3001/api/ships/${id}/`)).data as StarshipData;
};
