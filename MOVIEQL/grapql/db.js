import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  console.log(REQUEST_URL);
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
// export let movies = [
//   {
//     id: 0,
//     name: "특송",
//     score: 9,
//   },
//   {
//     id: 1,
//     name: "스파이더맨:노웨이홈",
//     score: 8,
//   },
//   {
//     id: 2,
//     name: "웨스트사이드스토리",
//     score: 7,
//   },
//   {
//     id: 3,
//     name: "경관의 피",

//     score: 6,
//   },
//   {
//     id: 4,
//     name: "구찌",

//     score: 5,
//   },
//   {
//     id: 5,
//     name: "킹스맨",
//     score: 4,
//   },
// ];

// export const getMovies = () => movies;
// export const getById = (id) => {
//   const filteredMovies = movies.filter((movie) => id === movie.id);
//   return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//   const cleanedMovie = movies.filter((movie) => movie.id != id);
//   if (movies.length > cleanedMovie.length) {
//     movies = cleanedMovie;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: `${movies.length + 1}`,
//     name,
//     score,
//   };
//   movies.push(newMovie);
//   return newMovie;
// };
