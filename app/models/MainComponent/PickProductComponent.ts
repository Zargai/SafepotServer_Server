import {IPickProduct,IPickProductInput } from '../../interfaces/MainComponent/PickProductComponent';
import mongoose from 'mongoose';

const PickProductComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        pagetitle:{ type: String },
        pagedescription:{ type: String },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IPickProduct & mongoose.Document>('PickProductComponent', PickProductComponent)