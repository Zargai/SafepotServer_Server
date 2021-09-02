import { IBannerC } from '../../interfaces/MainComponent/IBannerC';
import mongoose from 'mongoose';

const IBannerC = new mongoose.Schema(
    {
        id: { type: Number },
        image: { type: String },
        title: { type: String },
        description: { type: String },
    })

export default mongoose.model<IBannerC & mongoose.Document>('IBannerC', IBannerC)