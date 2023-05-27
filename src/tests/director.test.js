const request = require("supertest");
const app = require("../app");
require('../models')

//variables globales
let directorId;

//test para crear un directo
test("POST /directors debe retornar 201", async () => {
  const newDirector = {
    firstName: "Jorge",
    lastName: "Cruz",
    nationality: "Ecuatoriano",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    birthday: "1959-11-08",
  };
  const resPostCreate = await request(app).post("/directors").send(newDirector);
  directorId = resPostCreate.body.id;
  expect(resPostCreate.status).toBe(201);
});

//test de get para el modelo directors
test("GET /directos debe retornar 200", async () => {
  const resGetAll = await request(app).get("/directors");
  expect(resGetAll.status).toBe(200);
});


//test de put para el modelo directors
test('PUT /directos/:id debe retornar 200', async () => { 
    const directorUpdate = {
        firstName: "Jorge Leonardo"
    }
    const resPut = await request(app).put(`/directors/${directorId}`).send(directorUpdate)
    expect(resPut.status).toBe(200)
    expect(resPut.body.firstName).toBe(directorUpdate.firstName)
 })

 //test para delete del modelo directors
 test('DELETE /directors/:id debe retornar 204', async () => { 
    const resDelete = await request(app).delete(`/directors/${directorId}`)
    expect(resDelete.status).toBe(204)
  })