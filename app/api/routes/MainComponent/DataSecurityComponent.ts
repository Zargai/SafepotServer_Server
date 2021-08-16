import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IDataSecurity, IDataSecurityInput } from '../../../interfaces/MainComponent/DataSecurityComponent';
import DataSecuritycomponentService from '../../../services/DataSecurityComponent';

const route = Router();

export default (app: Router) => {
    app.use('/datasecurity', route)
    const DataSecuritycomponentServiceInstance = Container.get(DataSecuritycomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await DataSecuritycomponentServiceInstance.Add(req.body as IDataSecurityInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await DataSecuritycomponentServiceInstance.update(req.body as IDataSecurityInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })

    //get all data
    route.get('/get', async (req: Request, res: Response, next: NextFunction) => {
        try {
            // let location =req.body.location;
            const { Record } = await DataSecuritycomponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

