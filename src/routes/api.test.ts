import request from 'supertest';
import app from '../app';

describe('Teste de todas as rotas', () => {
    it('teste da rota /ping', (done) => {
        request(app)
            .get('/ping')
            .then(response => {
                expect(response.body.pong).toBe(true)
                return done()
            })
    })
})