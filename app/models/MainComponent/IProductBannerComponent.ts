import {IProductBanner,IProductBannerInput } from '../../interfaces/MainComponent/ProductBannerComponent';
import mongoose from 'mongoose';

const ProductBannerComponent = new mongoose.Schema(
    {
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IProductBanner & mongoose.Document>('ProductBannerComponent', ProductBannerComponent)