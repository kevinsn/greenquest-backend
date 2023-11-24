import { AppDataSource } from "../data-source";
import { Login } from '../entity/Login';
import { Request, Response } from "express";

const repository = AppDataSource.getRepository(Login);

export const loginUser = async (request: Request, response: Response): Promise<void> => {
    try {
        const { email, password } = request.body;
        const user = await repository.findOne({ where: { email, password } });
        if (user) {
            response.status(200).json({ message: 'Sucesso', user });
        } else {
            response.status(401).json({ message: 'Credenciais incorretas' });
        }
    } catch (error) {
        response.status(500).json({ message: 'Erro ao logar', error: error.message });
    }
};

export const registerUser = async (request: Request, response: Response): Promise<void> => {
    try {
        const { name, email, password } = request.body;
        const newUser = await repository.create({ name, email, password });
        await repository.save(newUser);
        response.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        response.status(500).json({ message: 'Erro ao cadaastrar', error: error.message });
    }
};
