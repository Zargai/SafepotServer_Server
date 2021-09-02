import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IBannerCInput, IBannerC } from '../../../interfaces/MainComponent/IBannerC';
import IBannerCComponentServices from '../../../services/IBannerCComponent';

const route = Router();

export default (app: Router) => {
    app.use('/Ibanner', route)
    const ServiceInstance = Container.get(IBannerCComponentServices);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await ServiceInstance.Add(req.body as IBannerCInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await ServiceInstance.update(req.body as IBannerCInput);
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
            const { Record } = await ServiceInstance.get(req.body as IBannerCInput);
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

