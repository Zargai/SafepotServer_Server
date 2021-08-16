import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IWhoWeAreInput, IWhoWeAre } from '../../../interfaces/MainComponent/WhoWeAreComponent';
import WhoWeAreComponentService from '../../../services/WhoWeAreCompnent';

const route = Router();

export default (app: Router) => {
    app.use('/whoweare', route)
    const WhoWeAreComponentServiceInstance = Container.get(WhoWeAreComponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await WhoWeAreComponentServiceInstance.Add(req.body as IWhoWeAreInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await WhoWeAreComponentServiceInstance.update(req.body as IWhoWeAreInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })
    
    //for d
    route.post('/delete', async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { success } = await WhoWeAreComponentServiceInstance.delete(req.body as IWhoWeAreInput);
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
            const { Record } = await WhoWeAreComponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

