import { IEnterpriseBusiness } from '../../interfaces/MainComponent/Enterprisebusiness';
import mongoose from 'mongoose';

const EnterprisebusinessComponent = new mongoose.Schema(
    {
        title: { type: String },
        image: { type: String },
        description: { type: String },
        id: { type: Number },
        pagetitle: { type: String },
        pagedescription: { type: String },
    })

export default mongoose.model<IEnterpriseBusiness & mongoose.Document>('EnterprisebusinessComponent', EnterprisebusinessComponent)