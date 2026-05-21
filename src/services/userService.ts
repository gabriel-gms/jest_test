import { User } from '../models/User'
import bcrypt from 'bcrypt';

export const createUser = async (email: string, password: string) => {
    let hasUser = await User.findOne({where: { email }});
    
    if(hasUser) {
        return false;
    }

    const hash = bcrypt.hashSync(password, 10);
    const user = await User.create({ email, password: hash });
    return user;
}

export const findByEmail = async (email: string) => {
    let hasUser = await User.findOne({where: { email }});
    return hasUser;
}

export const matchPassword = async (password: string, encrypted: string) => {
    return bcrypt.compareSync(password, encrypted);
}

export const listAll = async () => {
    return await User.findAll();
}