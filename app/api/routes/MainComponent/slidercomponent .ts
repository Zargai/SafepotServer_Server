import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import slidercomponentService from '../../../services/SliderComponent';
import { ISliderComponent, ISliderComponentInput } from '../../../interfaces/MainComponent/SliderComponent';


const route = Router();

export default (app: Router) => {
    app.use('/slidercomponent', route)
    const slidercomponentServiceInstance = Container.get(slidercomponentService);

    //for adding
    route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        try {
            const { Record } = await slidercomponentServiceInstance.Add(req.body as ISliderComponentInput);
            console.log("recorrrrrd==>",Record)
            return res.status(201).json({ Record })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })


    //update 
    route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message, success } = await slidercomponentServiceInstance.update(req.body as ISliderComponentInput);
            return res.status(201).json({ message, success })
        } catch (e) {
            console.log(e);
            return next(e)
        }
    })

      //get all data
       route.get('/get', async (req: Request, res: Response,next: NextFunction) => {
        try{
            // let location =req.body.location;
            const {Record} = await slidercomponentServiceInstance.getall();
            return res.json(Record).status(200);

        }catch(e){
            console.log(e);
              return next(e)
        }
      });

      //get all data
       route.get('/getcount', async (req: Request, res: Response,next: NextFunction) => {
        try{
            // let location =req.body.location;
            const {count} = await slidercomponentServiceInstance.getcount();
            const array =[]
            for(let i=1;i<=count;i++)
            {
                array.push(i)
            }
            return res.json(array).status(200);

        }catch(e){
            console.log(e);
              return next(e)
        }
      });
      

}

