import request from 'supertest';
import app from '../app';
import { User } from '../models/User';

const email = 'Joao@email.com'
const password = '123456'

describe('Teste de todas as rotas', () => {

    beforeAll(async () => {
        await User.sync({ force: true })
    })

    it('teste da rota /ping', (done) => {
        request(app)
            .get('/ping')
            .then(response => {
                expect(response.body.pong).toBe(true)
                return done()
            })
    })

    it('registrar um novo usuario', (done) => {
        request(app)
            .post('/register')
            .send(`email=${email}&password=${password}`)
            .then(response => {
                expect(response.body).toHaveProperty('id')
                return done()
            })
    })

    it('realizar login', (done) => {
        request(app)
            .post('/login')
            .send(`email=${email}&password=${password}`)
            .then(response => {
                expect(response.body.status).toBe(true)
                return done()
            })
    })

    it('listar os usuarios', (done) => {
        request(app)
            .get('/list')
            .then(response => {
                expect(response.body.list.length).toBe(1)
                return done()
            })
    })
})