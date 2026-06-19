const request = require('supertest');
const app = require('../app');

describe('CloudShop API', () => {

    test('GET / should return status 200', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
    });

    test('GET / should return correct message', async () => {
        const response = await request(app).get('/');

        expect(response.text).toBe('CloudShop API Running');
    });

});
