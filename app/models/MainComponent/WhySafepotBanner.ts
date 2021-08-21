import { IWhySafepotBanner } from '../../interfaces/MainComponent/WhySafepotBanner';
import mongoose from 'mongoose';

const WhySafepotBannerComponent = new mongoose.Schema(
    {
        title: { type: String },
        image: { type: String },
        description: { type: String },
    })

export default mongoose.model<IWhySafepotBanner & mongoose.Document>('WhySafepotBannerComponent', WhySafepotBannerComponent)