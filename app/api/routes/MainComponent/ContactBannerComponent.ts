import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IContactUsBannerInput, IContactUsBanner } from '../../../interfaces/MainComponent/ContactBannerComponent';
import ContactBannerComponentService from '../../../services/ContactBannerComponent';

const route = Router();

export default (app: Router) => {
    app.use('/contactusbanner', route)
    const ServiceInstance = Container.get(ContactBannerComponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await ServiceInstance.Add(req.body as IContactUsBannerInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await ServiceInstance.update(req.body as IContactUsBannerInput);
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
            const { Record } = await ServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

