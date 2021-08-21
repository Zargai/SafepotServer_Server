
import { IEnterpriseBanner } from '../../interfaces/MainComponent/EnterpriseBanner';
import mongoose from 'mongoose';

const EnterpriseBannerComponent = new mongoose.Schema(
    {
        title: { type: String },
        image: { type: String },
        description: { type: String },
    })

export default mongoose.model<IEnterpriseBanner & mongoose.Document>('EnterpriseBannerComponent', EnterpriseBannerComponent)