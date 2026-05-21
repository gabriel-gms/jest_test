import { Request, Response } from 'express';
import { createUser, findByEmail, matchPassword, listAll } from '../services/userService';

export const register = async (req: Request, res: Response) => {
    console.log(req.body.email, req.body.password);
    if(req.body.email && req.body.password) {
        let { email, password } = req.body;

        let newUser = await createUser(email, password);

        if(newUser) {
            res.json({
                id: newUser.id,
            })
            return
        }
        return res.json('E-mail já cadastrado.');
    }

    res.json({ error: 'E-mail e/ou senha não enviados.' });
}

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        let user = await findByEmail(email);

        if(user && await matchPassword(password, user.password)) {
                res.json({ status: true });
                return;
            }
        }
        else {
            res.status(400).json({ error: 'E-mail ou senha errados.' });
            return;
        }
    
    res.json({ error: 'E-mail e/ou senha não enviados.' });
}


export const list = async (req: Request, res: Response) => {
    let users = await listAll();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
}