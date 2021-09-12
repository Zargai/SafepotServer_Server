import { Router, Request, Response, NextFunction } from "express";

 
import PaymentFunction = require('../middleware/Authorized');
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
        
         const response = await PaymentFunction.getMerchantDetails(req.body,function (data){
           res.status(200).json({ "responce": data });
         });
          
      } catch (e) {
        console.log(e);
        return next(e);
      }
    }
  );

  


};
