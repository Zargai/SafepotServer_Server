import { Router, Request, Response, NextFunction } from "express";

 import   ApiContracts  from 'authorizenet'
// import * as ApiControllers from 'authorizenet';
// import * as ApiControllers from '../middleware/';
import test = require('../middleware/Authorized');
const route = Router();

const loginId = "5w7M36w6G73v4Xsg";
const transactionKey = "8tVXM7cxX8NF";

export default (app: Router) => {
  app.use("/auth", route);
  //for sign up
  route.post(
    "/payment",
    async (req: Request, res: Response, next: NextFunction) => {
      console.log(req.body);
     
      try {
        
        const  response = await test.getMerchantDetails(req.body);
        console.log("results==>", response)
        res.status(200).json({ "responce": response});
      } catch (e) {
        console.log(e);
        return next(e);
      }
    }
  );

  


};
