import axios from "axios";

export const baseURLImage = "https://image.tmdb.org/t/p/";

export const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDc2OGU0MGU5ZjE0ZDczNWQwNzQ1NGU0NTU4NzkyNCIsInN1YiI6IjY1YWZkMWM1M2UyZWM4MDBhZWM0OGMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O6rYvISMCj2lpckMDiIvsDo4tj8-sfhKPsMrqGNa1bc",
  },
});
