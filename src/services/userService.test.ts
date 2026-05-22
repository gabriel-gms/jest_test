import { User, UserInstance } from '../models/User'
import * as UserService from './userService';

const email = 'joao@email.com'
const password = '123456'

describe('Testes pra o userService', () => {
    beforeAll(async() => {
        await User.sync({ force: true})
    })

    it('Criar um usuário', async () => {
        const newUser = await UserService.createUser(email, password) as UserInstance
        expect(newUser).not.toBeInstanceOf(Error)
        expect(newUser).toHaveProperty('id')
        expect(newUser.email).toBe(email)
    })

    it('Verificar se ja existe o email na hora do cadastro', async () => {
        const newuser = await UserService.createUser(email, password) as UserInstance
        expect(newuser).not.toBeInstanceOf(Error)
    })

    it('Procurar usuario pelo email', async () => {
        const user = await UserService.findByEmail(email) as UserInstance
        expect(user.email).toBe(email)
    })

    it('Verificar se a senha bate', async () => {
        const user = await UserService.findByEmail(email) as UserInstance
        const match = await UserService.matchPassword(password, user.password)
        expect(match).toBe(true)
    })

    it('Verificar se a senha não bate', async () => {
        const user = await UserService.findByEmail(email) as UserInstance
        const match = await UserService.matchPassword('senhaerrada', user.password)
        expect(match).toBe(false)
    })

    it('Listar todos os usuários', async () => {
        const users = await UserService.listAll() as UserInstance[]
        expect(users.length).toBe(1)
        for(let i in users){
            expect(users[i]).toBeInstanceOf(User)
        }
    })
})