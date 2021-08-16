import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IHeader, IHeaderInput } from '../../../interfaces/MainComponent/IHeader';
import HeadercomponentService from '../../../services/Header';

const route = Router();

export default (app: Router) => {
    app.use('/header', route)
    const HeadercomponentServiceInstance = Container.get(HeadercomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await HeadercomponentServiceInstance.Add(req.body as IHeaderInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await HeadercomponentServiceInstance.update(req.body as IHeaderInput);
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
            const { Record } = await HeadercomponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

