import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IAboutBannereInput, IAboutBanner } from '../../../interfaces/MainComponent/AboutBannerComponent';
import AboutBannercomponentService from '../../../services/AboutBannerComponent';

const route = Router();

export default (app: Router) => {
    app.use('/aboutbanner', route)
    const AboutBannercomponentServiceInstance = Container.get(AboutBannercomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await AboutBannercomponentServiceInstance.Add(req.body as IAboutBannereInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await AboutBannercomponentServiceInstance.update(req.body as IAboutBannereInput);
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
            const { Record } = await AboutBannercomponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

