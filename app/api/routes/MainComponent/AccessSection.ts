import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IAccessSectionInput, IAccessSection } from '../../../interfaces/MainComponent/AccessSection';
import AccessSectioncomponentService from '../../../services/AccessSection';

const route = Router();

export default (app: Router) => {
    app.use('/accesssection', route)
    const AccessSectioncomponentServiceInstance = Container.get(AccessSectioncomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await AccessSectioncomponentServiceInstance.Add(req.body as IAccessSectionInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await AccessSectioncomponentServiceInstance.update(req.body as IAccessSectionInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })
    
    //for d
    route.post('/delete', async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { success } = await AccessSectioncomponentServiceInstance.delete(req.body as IAccessSectionInput);
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
            const { Record } = await AccessSectioncomponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

