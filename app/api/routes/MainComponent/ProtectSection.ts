import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IProtectSection, IProtectSectionInput } from '../../../interfaces/MainComponent/ProtectSection';
import ProtectSectioncomponentService from '../../../services/ProtectSection';

const route = Router();

export default (app: Router) => {
    app.use('/protectsection', route)
    const ProtectSectioncomponentServiceInstance = Container.get(ProtectSectioncomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await ProtectSectioncomponentServiceInstance.Add(req.body as IProtectSectionInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await ProtectSectioncomponentServiceInstance.update(req.body as IProtectSectionInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })
    
    //for d
    route.post('/delete', async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { success } = await ProtectSectioncomponentServiceInstance.delete(req.body as IProtectSectionInput);
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
            const { Record } = await ProtectSectioncomponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

