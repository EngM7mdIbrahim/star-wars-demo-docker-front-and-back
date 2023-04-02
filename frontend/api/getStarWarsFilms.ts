import axios from 'axios';
import { FilmsData } from 'types/Films';

export const getStarWarsFilms = async (): Promise<FilmsData> => {
  return (await axios.get('backend/api/films/')).data as FilmsData;
};
