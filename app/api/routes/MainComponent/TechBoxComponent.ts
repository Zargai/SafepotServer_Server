import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { ITechBoxInput, ITechBox } from '../../../interfaces/MainComponent/Techboxcomponent';
import TechBoxComponentService from '../../../services/TechBoxComponent';

const route = Router();

export default (app: Router) => {
    app.use('/techbox', route)
    const TechBoxComponentServiceInstance = Container.get(TechBoxComponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await TechBoxComponentServiceInstance.Add(req.body as ITechBoxInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await TechBoxComponentServiceInstance.update(req.body as ITechBoxInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })
    
    //for d
    route.post('/delete', async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { success } = await TechBoxComponentServiceInstance.delete(req.body as ITechBoxInput);
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
            const { Record } = await TechBoxComponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

