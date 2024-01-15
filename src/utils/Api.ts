import axios from "axios";

export const baseURLImage = "https://image.tmdb.org/t/p/";

export const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTY0MDRhOTcyMzYyNmM1Y2U3N2NjYjVlMDE2Yjk0NCIsInN1YiI6IjY1YTM0NWNmMjM4NTEzMDEyZTYyYTkzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y_fPYIB1J6IfNtoalLoEmqR4rNOFmPtferLuW0q5TUk",
  },
});
