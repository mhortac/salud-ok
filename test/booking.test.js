const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');

describe('POST /api/booking/create', () => {
    it('should failed for Authorization', async () => {
        const res = await request(app).post('/api/booking/create');
        expect(res.statusCode).toBe(401);
        expect(res.body.message).toBe('Unauthorized user');
    });
});

describe('GET /api/booking/list', () => {
    it('should failed for Authorization', async () => {
        const res = await request(app).get('/api/booking/list');
        expect(res.statusCode).toBe(401);
        expect(res.body.message).toBe('Unauthorized user');
    });
});
