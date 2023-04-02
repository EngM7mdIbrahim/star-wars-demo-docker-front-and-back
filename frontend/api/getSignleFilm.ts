import axios from 'axios';
import { FilmData } from 'types/Films';

export const getSignleFilm = async (id: string): Promise<FilmData> => {
  return (await axios.get(`http://localhost:3001/api/films/${id}/`)).data as FilmData;
};
