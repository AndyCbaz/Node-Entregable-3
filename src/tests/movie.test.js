const request = require("supertest");
const app = require("../app");
const Genre = require("../models/Genre");
const Actor = require("../models/Actor");
const Director = require("../models/Director");
require("../models");
//variables globales
let movieId;

//test para post create del modelo movie
test("POST /movies", async () => {
  const newMovie = {
    name: "Exorcista",
    image: "image.png",
    synopsis: "Lorem",
    releaseyear: 2004,
  };
  const resPostCreate = await request(app).post("/movies").send(newMovie);
  movieId = resPostCreate.body.id;
  expect(resPostCreate.status).toBe(201);
});

//test para getall del modelo movie
test("GET /movies debe retornar 200", async () => {
  const resGetAll = await request(app).get("/movies");
  expect(resGetAll.status).toBe(200);
});

//test para put del modelo movie
test("PUT /movies/:id debe retornar 200", async () => {
  const movieUpdate = {
    releaseyear: 2005,
  };
  const resPut = await request(app).put(`/movies/${movieId}`).send(movieUpdate);
  expect(resPut.status).toBe(200);
  expect(resPut.body.releaseyear).toBe(movieUpdate.releaseyear);
});

//test para probar el seteo de genero en el modelo movie
test("POST /movies/:id/genres debe retornar 200", async () => {
  const genero = await Genre.create({
    name: "Horror",
  });
  const bodyGenre = [genero.id];
  const resPostSet1 = await request(app)
    .post(`/movies/${movieId}/genres`)
    .send(bodyGenre);
  await genero.destroy;
  expect(resPostSet1.status).toBe(200);
  expect(resPostSet1.body).toHaveLength(1);
});

//test para probar el seteo de actor en el modelo movie
test("POST /movies/:id/actors debe retornar 200", async () => {
  const actor = await Actor.create({
    firstName: "Darling",
    lastName: "Ñato",
    nationality: "Ecuatoriano",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    birthday: "1996-12-25",
  });
  const bodyActor = [actor.id];
  const resPostSet2 = await request(app)
    .post(`/movies/${movieId}/actors`)
    .send(bodyActor);
  await actor.destroy;
  expect(resPostSet2.status).toBe(200);
  expect(resPostSet2.body).toHaveLength(1);
});

//test para probar el seteo de director en el modelo movie
test("POST /movies/:id/directors debe retornar 200", async () => {
  const director = await Director.create({
    firstName: "Paul",
    lastName: "Paez",
    nationality: "Ecuatoriano",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    birthday: "1959-11-08",
  });
  const bodyDirector = [director.id];
  const resPostSet3 = await request(app)
    .post(`/movies/${movieId}/directors`)
    .send(bodyDirector);
  await director.destroy;
  expect(resPostSet3.status).toBe(200);
  expect(resPostSet3.body).toHaveLength(1);
});

//test para delete del modelo movies
test("DELETE /movies/:id debe retornar 204", async () => {
  const resDelete = await request(app).delete(`/movies/${movieId}`);
  expect(resDelete.status).toBe(204);
});
