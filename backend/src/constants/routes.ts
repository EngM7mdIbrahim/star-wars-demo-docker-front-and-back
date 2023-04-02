//TODO: ADD YOUR ROUTES HERE!
const baseURL = "/api/";
const FILMS_DIR = "films/";
const SHIPS_DIR = "ships/"
const ROUTES = {
  FILMS: {
    ALL: `${baseURL}${FILMS_DIR}/`,
    ONE: `${baseURL}${FILMS_DIR}:id`,
  },
  SHIPS: {
    ONE: `${baseURL}${SHIPS_DIR}:id`,
  }
};

export { ROUTES };
