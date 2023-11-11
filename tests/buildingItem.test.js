const request = require('supertest');
const app = require('../app');

describe('Building Item API', () => {
    it('should create a new building item', async () => {
        const res = await request(app)
            .post('/buildingItem')
            .send({ name: 'Sample Building Item' });

        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Sample Building Item');
    });
});