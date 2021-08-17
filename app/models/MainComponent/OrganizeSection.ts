import {IOrganizeSection } from '../../interfaces/MainComponent/OrganizeSection';
import mongoose from 'mongoose';

const OrganizeSectionComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        pagetitle:{ type: String },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IOrganizeSection & mongoose.Document>('OrganizeSectionComponent', OrganizeSectionComponent)