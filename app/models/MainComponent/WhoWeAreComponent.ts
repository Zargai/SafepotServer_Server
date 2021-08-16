import {IWhoWeAre, } from '../../interfaces/MainComponent/WhoWeAreComponent';
import mongoose from 'mongoose';

const WhoWeAreComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        pagetitle:{ type: String },
        image:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IWhoWeAre & mongoose.Document>('WhoWeAreComponent', WhoWeAreComponent)