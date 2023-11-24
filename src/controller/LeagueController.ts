import { AppDataSource } from "../data-source";
import { League } from '../entity/League';
import { Request, Response } from "express";
const repository = AppDataSource.getRepository(League);

export const getLeagues = async (request: Request, response: Response) => {
    const league = await repository.find();

    return response.json(league);
};

export const saveLeague = async (request: Request, response: Response) => {
    const league = await repository.save(request.body);

    return response.json(league);
};

export const getLeague = async (request: Request, response: Response) => {
    const { id } = request.params
    const league = await repository.findOneBy({ id: parseInt(id) });
    return response.json(league);
};

export const updateLeague = async (request: Request, response: Response) => {
    const { id } = request.params
    const league = await repository.update(id, request.body);

    if (league.affected == 1) {
        const leagueUpdated = await repository.findOneBy({ id: parseInt(id) });
        return response.json(leagueUpdated);
    }
    else {
        return response.status(404).json({ message: 'Liga não encontrada!' })
    }
};

export const deleteLeague = async (request: Request, response: Response) => {
    const { id } = request.params
    const league = await repository.delete(id);


    if (league.affected == 1) {
        return response.status(200).json({ message: "Liga excluída com sucesso!" });
    }
    else {
        return response.status(404).json({ message: 'Liga não encontrada!' })
    }
};