import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IBlogBox, IBlogBoxInput } from '../../../interfaces/MainComponent/IBlogBoxComponent';
import PickProductcomponentService from '../../../services/PickProductComponent';

const route = Router();

export default (app: Router) => {
    app.use('/pickproduct', route)
    const PickProductcomponentServiceInstance = Container.get(PickProductcomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await PickProductcomponentServiceInstance.Add(req.body as IBlogBoxInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await PickProductcomponentServiceInstance.update(req.body as IBlogBoxInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })
    
    //for d
    route.post('/delete', async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { success } = await PickProductcomponentServiceInstance.delete(req.body as IBlogBoxInput);
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
            const { Record } = await PickProductcomponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

