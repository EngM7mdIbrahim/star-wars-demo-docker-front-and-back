import axios from 'axios';
import { StarshipData } from '../types/StarshipData';

export const getStarship = async (id: string): Promise<StarshipData> => {
  return (await axios.get(`https://swapi.dev/api/starships/${id}/`)).data as StarshipData;
};
