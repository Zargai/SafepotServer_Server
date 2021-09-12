import { IBlogsection } from "../../interfaces/MainComponent/IBlogsectionComponent";
import mongoose from "mongoose";

const IBlogsectionComponent = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  image: { type: String },
  heading1: { type: String },
  heading2: { type: String },
  heading3: { type: String },
  heading4: { type: String },
  heading5: { type: String },
  heading6: { type: String },
  heading7: { type: String },
  heading8: { type: String },
  heading9: { type: String },
  heading10: { type: String },
  description1: { type: String },
  description2: { type: String },
  description3: { type: String },
  description4: { type: String },
  description5: { type: String },
  description6: { type: String },
  description7: { type: String },
  description8: { type: String },
  description9: { type: String },
  description10: { type: String },
});

export default mongoose.model<IBlogsection & mongoose.Document>(
  "IBlogsectionComponent",
  IBlogsectionComponent
);
