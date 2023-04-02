import axios from 'axios';
import { FilmData } from 'types/Films';

export const getSignleFilm = async (id: string): Promise<FilmData> => {
  return (await axios.get(`backend/api/films/${id}/`)).data as FilmData;
};
