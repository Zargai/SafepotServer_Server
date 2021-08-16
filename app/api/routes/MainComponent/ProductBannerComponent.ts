import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IProductBannerInput, IProductBanner } from '../../../interfaces/MainComponent/ProductBannerComponent';
import ProductBannercomponentService from '../../../services/ProductBannerComponent';

const route = Router();

export default (app: Router) => {
    app.use('/productbanner', route)
    const ProductBannercomponentServiceInstance = Container.get(ProductBannercomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await ProductBannercomponentServiceInstance.Add(req.body as IProductBannerInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await ProductBannercomponentServiceInstance.update(req.body as IProductBannerInput);
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
            const { Record } = await ProductBannercomponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

