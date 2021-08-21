
import {IContactUsBanner } from '../../interfaces/MainComponent/ContactBannerComponent';
import mongoose from 'mongoose';

const ContactBannerComponent = new mongoose.Schema(
    {
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },       
})

export default mongoose.model<IContactUsBanner & mongoose.Document>('ContactBannerComponent', ContactBannerComponent)