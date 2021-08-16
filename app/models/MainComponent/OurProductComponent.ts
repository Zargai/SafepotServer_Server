import {IOurProduct,IOurProductInput } from '../../interfaces/MainComponent/OurProductComponent';
import mongoose from 'mongoose';

const OurProductComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        pagetitle:{ type: String },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IOurProduct & mongoose.Document>('OurProductComponent', OurProductComponent)