import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IUnitInput, IUnit } from '../../../interfaces/MainComponent/UnitsboxComponent';
import UnitBoxcomponentService from '../../../services/UnitBoxcomponent';

const route = Router();

export default (app: Router) => {
    app.use('/unitbox', route)
    const UnitBoxcomponentServiceInstance = Container.get(UnitBoxcomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await UnitBoxcomponentServiceInstance.Add(req.body as IUnitInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await UnitBoxcomponentServiceInstance.update(req.body as IUnitInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })
    
    //for d
    route.post('/delete', async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { success } = await UnitBoxcomponentServiceInstance.delete(req.body as IUnitInput);
            return res.status(201).json({ success });
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })

    //get all data
    route.get('/get', async (req: Request, res: Response, next: NextFunction) => {
        try {
            // let location =req.body.location;
            const { Record } = await UnitBoxcomponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

