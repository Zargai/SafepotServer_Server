import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IOurProduct, IOurProductInput } from '../../../interfaces/MainComponent/OurProductComponent';
import OurProductInputService from '../../../services/OurProductComponent';

const route = Router();

export default (app: Router) => {
    app.use('/ourproduct', route)
    const OurProductInputServiceInstance = Container.get(OurProductInputService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await OurProductInputServiceInstance.Add(req.body as IOurProductInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await OurProductInputServiceInstance.update(req.body as IOurProductInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })
    
    //for d
    route.post('/delete', async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { success } = await OurProductInputServiceInstance.delete(req.body as IOurProductInput);
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
            const { Record } = await OurProductInputServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

