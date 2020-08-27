import deezer from "../api/deezer";
export const FETCH_GENRE = "FETCH_GENRE";
export const FETCH_ARTSITS = "FETCH_ARTSITS";

export const fetchGenre = () => {
  const data = deezer.get("/genre");
  return {
    type: FETCH_GENRE,
    payload: data,
  };
};

export const fetchArtists = (id) => {
  const data = deezer.get(`/genre/${id}/artists`);
  return {
    type: FETCH_ARTSITS,
    payload: data,
  };
};

