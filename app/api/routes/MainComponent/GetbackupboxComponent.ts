import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IGetbackupboxInput, IGetbackupbox } from '../../../interfaces/MainComponent/GetBackupBoxComponent';
import GetbackupboxComponentService from '../../../services/GetbackupboxComponent';

const route = Router();

export default (app: Router) => {
    app.use('/getbackupbox', route)
    const GetbackupboxComponentServiceInstance = Container.get(GetbackupboxComponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await GetbackupboxComponentServiceInstance.Add(req.body as IGetbackupboxInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await GetbackupboxComponentServiceInstance.update(req.body as IGetbackupboxInput);
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
            const { Record } = await GetbackupboxComponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

