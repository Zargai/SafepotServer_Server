import {IProtectSection } from '../../interfaces/MainComponent/ProtectSection';
import mongoose from 'mongoose';

const ProtectSectionComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        pagetitle:{ type: String },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IProtectSection & mongoose.Document>('ProtectSectionComponent', ProtectSectionComponent)