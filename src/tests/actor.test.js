const request = require("supertest");
const app = require("../app");
require('../models')
//variables globales
let actorId;

//test para create del modelo actor
test("POST /actors debe retornar 201", async () => {
  const bodyNewActor = {
    firstName: "Andres",
    lastName: "Bonilla",
    nationality: "Ecuatoriano",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    birthday: "1996-12-25",
  };
  const resPostCreate = await request(app).post("/actors").send(bodyNewActor);
  actorId = resPostCreate.body.id;
  expect(resPostCreate.status).toBe(201);
});
//test para get all del modelo actor
test("GET /actors debe retornar 200", async () => {
  const resGetAll = await request(app).get("/actors");
  expect(resGetAll.status).toBe(200);
  // console.log(resGetAll.body)
});

//test para put del modelo actor
test("PUT /actors/:id debe retornar 200", async () => {
  const actorUpdate = {
    firstName: "Andres Sebastian",
  };
  const resPut = await request(app).put(`/actors/${actorId}`).send(actorUpdate);
  expect(resPut.status).toBe(200);
  expect(resPut.body.firstName).toBe(actorUpdate.firstName);
});

//test para delete del modelo actor
test("DELETE /actors/:id", async () => {
  const resDelete = await request(app).delete(`/actors/${actorId}`);
  expect(resDelete.status).toBe(204);
});
