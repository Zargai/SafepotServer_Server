import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IOrganizeSection, IOrganizeSectionInput } from '../../../interfaces/MainComponent/OrganizeSection';
import OrganizeSectioncomponentService from '../../../services/OrganizeSection';

const route = Router();

export default (app: Router) => {
    app.use('/organizesection', route)
    const OrganizeSectioncomponentServiceInstance = Container.get(OrganizeSectioncomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await OrganizeSectioncomponentServiceInstance.Add(req.body as IOrganizeSectionInput);
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const { message, success } = await OrganizeSectioncomponentServiceInstance.update(req.body as IOrganizeSectionInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })
    
    //for d
    route.post('/delete', async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { success } = await OrganizeSectioncomponentServiceInstance.delete(req.body as IOrganizeSectionInput);
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
            const { Record } = await OrganizeSectioncomponentServiceInstance.getall();
            return res.json(Record).status(200);

        } catch (e) {
            console.log(e);
            return next(e)
        }
    });



}

