import {IAccessSection } from '../../interfaces/MainComponent/AccessSection';
import mongoose from 'mongoose';

const AccessSectionComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        pagetitle:{ type: String },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },   
})

export default mongoose.model<IAccessSection & mongoose.Document>('AccessSectionComponent', AccessSectionComponent)