const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');

describe('POST /api/auth/login', () => {
    it('should failed for credentials', async () => {
        return request(app).post('/api/auth/login').expect(400);
    });
});

describe('POST /api/auth/login', () => {
    it('should failed for credentials', async () => {
        const res = await request(app).post('/api/auth/login');
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe('Los campos son obligatorios');
    });
});
