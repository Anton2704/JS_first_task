"use strict"; 

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors:{},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('Ваша оценка', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('Ваша оценка', '');

personalMovieDB.movies[a] = b;  //Записываем значения в объект в movies

personalMovieDB.movies[c] = d; 


console.log(personalMovieDB);