"use strict"; 

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors:{},
  genres: [],
  privat: false
};


// 1 тип цикла
/* for(let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('Ваша оценка', '');

  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }  
} */

// 2 тип цикла

let i = 0;

/* while(i < 2) {
  const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('Ваша оценка', '');
  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }  
  i++;

}  */

// 3 тип цикла

do {
  const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('Ваша оценка', '');
    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else {
    console.log('error');
    i--;
    }  
    i++;
}
while(i < 2);




if(personalMovieDB.count < 10)  {
  console.log("Просмотрено довольно мало фиьмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('произошла ошибка');
}

console.log(personalMovieDB);