import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IOverviewSectionInput, IOverviewSection } from '../../../interfaces/MainComponent/IOverviewSectionComponent';
import IOverviewComponentModelServices from '../../../services/OverviewSectionComponent';

const route = Router();

export default (app: Router) => {
    app.use('/Overview', route)
    const ServiceInstance = Container.get(IOverviewComponentModelServices);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await ServiceInstance.Add(req.body as IOverviewSectionInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await ServiceInstance.update(req.body as IOverviewSectionInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })
    //get all data
    route.post('/get', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await ServiceInstance.get(req.body as IOverviewSectionInput);
            return res.status(200).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    });

    //get all data
    route.get('/gets', async (req: Request, res: Response, next: NextFunction) => {
        try {
            // let location =req.body.location;
            const { Record } = await ServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

