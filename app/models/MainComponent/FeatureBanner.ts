import {IFeatureBanner } from '../../interfaces/MainComponent/FeatureBanner';
import mongoose from 'mongoose';

const FeatureBannerComponent = new mongoose.Schema(
    {
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})  

export default mongoose.model<IFeatureBanner & mongoose.Document>('FeatureBannerComponent', FeatureBannerComponent)