import { Request, Response, response} from 'express';
import db from '../database/connection';

export default class ConnectionsController {
    
    async index (request:Request, responde:Response) {
        const totalConnections = await db('connections').count('* as total');

        const { total } = totalConnections [0];

        return response.json ({ total })
    }
    async create (request:Request, responde:Response) {
        const {user_id} = request.body;
    
        await db ('connections').insert ({
            user_id,
        });
        return response.status(201).send();
    }
}