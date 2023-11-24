import { Router, request, response, Request, Response } from 'express'

import { getLeagues } from './controller/LeagueController';
import { saveLeague } from './controller/LeagueController';
import { getLeague } from './controller/LeagueController';
import { updateLeague } from './controller/LeagueController';
import { deleteLeague } from './controller/LeagueController';

import { loginUser } from './controller/LoginController';
import { registerUser } from './controller/LoginController';

const routes = Router()

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})

routes.get('/league', getLeagues)
routes.post('/league', saveLeague)
routes.get('/league/:id', getLeague)
routes.put('/league/:id', updateLeague)
routes.delete('/league/:id', deleteLeague)

routes.get('/login', loginUser)
routes.post('/login', registerUser)

export default routes