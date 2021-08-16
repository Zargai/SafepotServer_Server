import { IAboutBanner } from '../../interfaces/MainComponent/AboutBannerComponent';
import mongoose from 'mongoose';

const AboutBannerComponent = new mongoose.Schema(
    {
        title: { type: String },
        image: { type: String },
        description: { type: String },
    })

export default mongoose.model<IAboutBanner & mongoose.Document>('AboutBannerComponent', AboutBannerComponent)