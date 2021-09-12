import { IPricingPlan } from "../../interfaces/MainComponent/IpricingPlanadmin";
import mongoose from "mongoose";

const IPricingPlanModel = new mongoose.Schema({
  plane_name: { type: String },
  monthly_price: { type: String },
  yearly_price: { type: String },
});

export default mongoose.model<IPricingPlan & mongoose.Document>(
  "IPricingPlan",
  IPricingPlanModel
);
