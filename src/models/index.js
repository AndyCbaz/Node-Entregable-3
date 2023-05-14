const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");

//Una pelicula tiene muchos actores 
//Un actor tiene muchas peliculas
Movie.belongsToMany(Actor, {through: "MoviesActors"})
Actor.belongsToMany(Movie, {through: "MoviesActors"})

//Una pelicula tiene muchos directores
//Un director tiene muchas peliculas
Movie.belongsToMany(Director, {through: "MoviesDirectors"})
Director.belongsToMany(Movie, {through: "MoviesDirectors"})

//Una pelicula tiene muchos generos 
//Un genero puede tener muchas peliculas
Movie.belongsToMany(Genre,{through: "MoviesGenres"} )
Genre.belongsToMany(Movie,{through: "MoviesGenres"})



