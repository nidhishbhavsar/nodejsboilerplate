import request from 'supertest';
import { app } from '../../app';

it('return an error if no/empty parameter provided', async () => {
    let response = await request(app).post('/api/challange').send({});
    expect(response.status).toEqual(400);
    response = await request(app).post('/api/challange').send({ start: 9898, stop: '' });
    expect(response.status).toEqual(400);
});

it('return an error if start value is greater than stop value', async () => {
    let response = await request(app).post('/api/challange').send({ start: 20, stop: 5 });
    console.log(response.body);
    expect(response.status).toEqual(400);
});

it('return an success if all correct paramter provided', async () => {
    let response = await request(app).post('/api/challange').send({ start: 10, stop: 20 });    
    expect(response.status).toEqual(201);
});