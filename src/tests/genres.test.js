const request = require("supertest");
const app = require("../app");
require('../models')
//variables globales
let genreId;

//test para post create del modelo genres
test('POST /genres debe restornar 201', async () => { 
    const newGenre = {
        name: "Action"
    }
    const resPostCreate = await request(app).post('/genres').send(newGenre)
    genreId = resPostCreate.body.id;
    expect(resPostCreate.status).toBe(201)
 })

 //test para get all del modelo genres
 test('GET /genres debe retornar 200', async () => { 
    const resGetAll = await request(app).get('/genres')
    expect(resGetAll.status).toBe(200)
  })
//test para put del modelo genres
test('PUT /genres/:id debe retornar 200', async () => { 
    const genreUpdate = {
        name: "Romantic"
    }
    const resPut = await request(app).put(`/genres/${genreId}`).send(genreUpdate)
    expect(resPut.status).toBe(200)
    expect(resPut.body.name).toBe(genreUpdate.name)
 })

 //test para delete del modelo gernes
 test('DELETE /genres/:id debe retornar 204', async () => { 
    const resDelete = await request(app).delete(`/genres/${genreId}`)
    expect(resDelete.status).toBe(204)
  })

