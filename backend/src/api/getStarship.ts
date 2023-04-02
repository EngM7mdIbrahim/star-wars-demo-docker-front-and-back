import axios from 'axios';
import { StarshipData } from '../types/StarshipData';

export const getStarship = async (id: string): Promise<StarshipData> => {
  return (await axios.get(`backend/starships/${id}/`)).data as StarshipData;
};
