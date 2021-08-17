import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IFeatureBannerInput } from '../../../interfaces/MainComponent/FeatureBanner';
import FeatureBannercomponentService from '../../../services/FeatureBanner';

const route = Router();

export default (app: Router) => {
    app.use('/featurebanner', route)
    const FeatureBannercomponentServiceInstance = Container.get(FeatureBannercomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await FeatureBannercomponentServiceInstance.Add(req.body as IFeatureBannerInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await FeatureBannercomponentServiceInstance.update(req.body as IFeatureBannerInput);
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
            const { Record } = await FeatureBannercomponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

